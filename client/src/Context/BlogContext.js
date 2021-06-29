import React, { useState, useEffect, createContext } from "react";
import API from "../utils/API";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
    const [blogData, setBlogData] = useState("loading");
    const [blogUpdateQueue, setBlogUpdateQueue] = useState({})
    console.log(blogData)

    useEffect(() => {
        loadBlogData();
    }, []);

    function loadBlogData() {
        API.getPosts()
            .then(res => {
                setBlogData(res.data)
            })
            .catch(err => console.log(err));
    };

    function handleInputChange (event) {
        updateInputChange(event)
        updateUpdateQueue(event)
    }
    
    function updateInputChange(event) {
        let value = event.target.value;
        const path = event.target.dataset.path;
        updatePathHandler(setBlogData, path, {...blogData}, value)
    }
    
    function updateUpdateQueue (event) {
        const path = event.target.dataset.path;
        updatePathHandler(setBlogUpdateQueue, path, {...blogUpdateQueue}, true)
    }
    
    function updateBlogData(path, value) {
        API.updateBlog(blogData._id,{[path]: value})
           .then(res => {
            updatePathHandler(setBlogUpdateQueue, path, {...blogUpdateQueue}, false)
            })
            .catch(err => console.log(err));
    }
    
    function updatePathHandler (updateFunction, path, object, value) {
        let newState = object
        var schema = newState;  // a moving reference to internal objects within obj
        var pList = path.split('.');
        for(var i = 0; i < pList.length-1; i++) {
          var elem = pList[i];
          if( !schema[elem] ) schema[elem] = {}
          schema = schema[elem];
        }
        schema[pList[pList.length-1]] = value;
        updateFunction(newState)
    }

    if (blogData === "loading")
        return (<h1>LOADING</h1>);

    return (
        <BlogContext.Provider value={{blogData, blogUpdateQueue, handleInputChange, updateBlogData}}>
            {children}
        </BlogContext.Provider>
    );
};

