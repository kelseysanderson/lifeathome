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
            body: [{type: "", data: ""}]
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
    function appendInput() {
        blogDataForm.post.body.push({type: "new", data: ""})
        setBlogDataForm({post: blogDataForm.post })
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
                        body: [{type: "", data: ""}]
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

    //REORDER AND DELETE ON FORM
    function reorderBlogBodyForm(moveIndex, direction) {
        let toMove = blogDataForm.post.body.splice(moveIndex, 1)[0]
        console.log(blogDataForm.post.body)

        if (direction === "Up") {
            if (moveIndex === 0) {
                blogDataForm.post.body.push(toMove)
            } else {
                blogDataForm.post.body.splice(moveIndex - 1, 0, toMove)
            }
        }

        if (direction === "Down") {
            if (moveIndex === blogDataForm.post.body.length) {
                blogDataForm.post.body.unshift(toMove)
            } else {
                blogDataForm.post.body.splice(moveIndex + 1, 0, toMove)
            }
        }

        setBlogDataForm({post: blogDataForm.post})
    }

    function deleteBlogBodyForm(deleteIndex) {
        blogDataForm.post.body.splice(deleteIndex, 1)
        console.log(blogDataForm.post.body)

        setBlogDataForm({post: blogDataForm.post})
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

    //REORDER AND DELETE BLOGBODY, AND UPDATE API
    function reorderBlogBody(moveIndex, objIndex, direction, id) {
        let toMove = blogData.array[objIndex].body.splice(moveIndex, 1)[0]

        if (direction === "Up") {
            if (moveIndex === 0) {
                blogData.array[objIndex].body.push(toMove)
            } else {
                blogData.array[objIndex].body.splice(moveIndex - 1, 0, toMove)
            }
        }

        if (direction === "Down") {
            if (moveIndex === blogData.array[objIndex].body.length) {
                blogData.array[objIndex].body.unshift(toMove)
            } else {
                blogData.array[objIndex].body.splice(moveIndex + 1, 0, toMove)
            }
        }

        setBlogData({array: blogData.array}, updateBlogBody(objIndex, blogData.array[objIndex].body, id))
    }

    function deleteBlogBody(deleteIndex, objIndex, id) {
        blogData.array[objIndex].body.splice(deleteIndex, 1)
        console.log(blogData.array[objIndex].body)

        setBlogData({array: blogData.array}, updateBlogBody(blogData.array[objIndex].body, id))
    }

    function updateBlogBody (value, id) {
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
            reorderBlogBody,
            deleteBlogBody,
            reorderBlogBodyForm,
            deleteBlogBodyForm,
            blogCounter,
            
        }
        }>
            {children}
        </BlogContext.Provider>
    );
};

