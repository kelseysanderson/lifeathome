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
            body: []
        }
    })
    const [blogUpdateQueue, setBlogUpdateQueue] = useState({ array: [] })
    const [blogBodyInputs, setBlogBodyInputs] = useState({ form: [0] })
    const [blogCounter, setBlogCounter] = useState({array: []})

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

    //BLOG BODY INPUTS
    function appendInput(input) {
        var newInput = blogBodyInputs[input].length;
        setBlogBodyInputs(prevState => ({ [input]: prevState[input].concat([newInput]) }));
      }
    
      function resetInputs (input) {
        if (input === "form") {
            setBlogBodyInputs({ form: [0] })
        } else {
            setBlogBodyInputs({ [input]: [] })
        }
      }

    //FORM FUNCTIONS
    function formInputChange(event) {
        event.preventDefault()
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
                        body: []
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
        event.preventDefault()
        updateInputChange(event)
        updateUpdateQueue(event)
    }

    function updateInputChange(event) {
        event.preventDefault()
        let value = event.target.value;
        const path = event.target.dataset.path;
        const index = parseInt(event.target.dataset.index)
        updatePathHandler(setBlogData, path, blogData.array, value, index)
    }

    function updateUpdateQueue(event) {
        event.preventDefault()
        const path = event.target.dataset.path;
        const index = parseInt(event.target.dataset.index)
        const valueArr = path.split(".")
        const value = () => {
            try {
              return valueArr.reduce((object, property) => object[property], blogUpdateQueue.array[index])
            } catch {
              return ""
            }
        }
        if (value() === true) {
            return
        } else {
            updatePathHandler(setBlogUpdateQueue, path, blogUpdateQueue.array, true, index)
        }
    }

    function updateBlogData(path, value, id, index) {
        API.updatePost(id, {$set: { [path]: value }})
            .then(res => {
                console.log(res)
                updatePathHandler(setBlogUpdateQueue, path, blogUpdateQueue.array, false, parseInt(index))
            })
            .catch(err => console.log(err));
    }

    function updatePathHandler(updateFunction, path, array, value, index) {
        if (array[index] === undefined) { array[index] = {} }
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

        if (pList[0] === "body" && array === blogUpdateQueue.array) {
            if (blogCounter.array[index] === undefined) {
                blogCounter.array[index] = 0
            }
            if (value === true ) {
                blogCounter.array[index] = blogCounter.array[index] + 1
                setBlogCounter({array: blogCounter.array})
            } else {
                blogCounter.array[index] = blogCounter.array[index] - 1
                setBlogCounter({array: blogCounter.array})
            }
        }
    
    }

    //APPEND NEW BLOG BODY TO STATE
    function appendBlogBodyInput(index, length) {
        updatePathHandler(setBlogData, "body." + length + ".type", blogData.array, "new", index)
        updatePathHandler(setBlogData, "body." + length + ".data", blogData.array, "", index)
        updatePathHandler(setBlogUpdateQueue, "body." + length + ".type", blogUpdateQueue.array, true, index)
        updatePathHandler(setBlogUpdateQueue, "body." + length + ".data", blogUpdateQueue.array, true, index)
    }

    //REORDERS BLOGBODY AND UPDATE API
    function reorderBlogBody(move, objIndex, direction, id) {
        let toMove = blogData.array[objIndex].body.splice(move, 1)[0]

        if (direction === "Up") {
            if (move === 0) {
                blogData.array[objIndex].body.push(toMove)
            } else {
                blogData.array[objIndex].body.splice(move - 1, 0, toMove)
            }
        }

        if (direction === "Down") {
            if (move === blogData.array[objIndex].body.length) {
                blogData.array[objIndex].body.unshift(toMove)
            } else {
                blogData.array[objIndex].body.splice(move + 1, 0, toMove)
            }
        }

        console.log(blogData.array[objIndex].body)
        setBlogData({array: blogData.array}, reorderUpdatePost(objIndex, blogData.array[objIndex].body, id))
    }

    function reorderUpdatePost (objIndex, value, id) {
        API.updatePost(id, {body: value })
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err));
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
            deletePost,
            appendBlogBodyInput,
            blogBodyInputs,
            appendInput,
            resetInputs,
            reorderBlogBody,
            blogCounter
        }
        }>
            {children}
        </BlogContext.Provider>
    );
};

