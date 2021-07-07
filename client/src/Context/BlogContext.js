import React, { useState, useEffect, createContext } from "react";
import API from "../utils/API";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
    const [blogData, setBlogData] = useState("loading");
    const [blogDataForm, setBlogDataForm] = useState({
        post: {
            title: "",
            author: "",
            description: "",
            img_src: "",
            body: ""
        }
    })
    const [blogUpdateQueue, setBlogUpdateQueue] = useState({ array: [] })

    useEffect(() => {
        loadBlogData();
    }, []);

    function loadBlogData() {
        API.getPosts()
            .then(res => {
                setBlogData({ array: res.data })
            })
            .catch(err => console.log(err));
    };

    //FORM FUNCTIONS
    function formInputChange(event) {
        let value = event.target.value;
        const path = event.target.dataset.path;
        updatePathHandlerForm(setBlogDataForm, path, blogDataForm.post, value)
    }

    function postBlogData() {
        API.postPost(blogDataForm.post)
            .then(() => {
                setBlogDataForm({
                    post: {
                        title: "",
                        author: "",
                        description: "",
                        img_src: "",
                        body: ""
                    }
                })
                loadBlogData()
            })
            .catch(err => console.log(err));
    }

    function updatePathHandlerForm(updateFunction, path, object, value) {
        // let newState = object
        var schema = object;  // a moving reference to internal object within obj
        var pList = path.split('.');
        for (var i = 0; i < pList.length - 1; i++) {
            var elem = pList[i];
            if (!schema[elem]) schema[elem] = {}
            schema = schema[elem];
        }
        schema[pList[pList.length - 1]] = value;
        updateFunction({ post: object })
    }

    //UPDATE FUNCTIONS
    function handleInputChange(event) {
        updateInputChange(event)
        updateUpdateQueue(event)
    }

    function updateInputChange(event) {
        let value = event.target.value;
        const path = event.target.dataset.path;
        const index = parseInt(event.target.dataset.index)
        updatePathHandler(setBlogData, path, blogData.array, value, index)
    }

    function updateUpdateQueue(event) {
        const path = event.target.dataset.path;
        const index = parseInt(event.target.dataset.index)
        updatePathHandler(setBlogUpdateQueue, path, blogUpdateQueue.array, true, index)
    }

    function updateBlogData(path, value, id, index) {
        API.updatePost(id, { [path]: value })
            .then(res => {
                updatePathHandler(setBlogUpdateQueue, path, blogUpdateQueue.array, false, parseInt(index))
            })
            .catch(err => console.log(err));
    }

    function updatePathHandler(updateFunction, path, array, value, index) {
        if (array[index] === undefined) { array[index] = {} }
        console.log(array)
        let newState = array[index]
        var schema = newState;  // a moving reference to internal object within obj
        var pList = path.split('.');
        for (var i = 0; i < pList.length - 1; i++) {
            var elem = pList[i];
            if (!schema[elem]) schema[elem] = {}
            schema = schema[elem];
        }
        schema[pList[pList.length - 1]] = value;
        updateFunction({ array: array })
    }

    //DELETE FUNCTNIOS
    function deletePost(id) {
        API.deletePost(id)
            .then(() => {
                loadBlogData()
            })
            .catch(err => console.log(err));
    }

    if (blogData === "loading")
        return (<h1>LOADING</h1>);

    return (
        <BlogContext.Provider value={{
            blogData,
            blogUpdateQueue,
            blogDataForm,
            handleInputChange,
            updateBlogData,
            formInputChange,
            postBlogData,
            deletePost
        }
        }>
            {children}
        </BlogContext.Provider>
    );
};

