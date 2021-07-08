import React, { useState, useEffect, createContext } from "react";
import API from "../utils/API";

export const FeaturedContext = createContext();

export const FeaturedProvider = ({ children }) => {
    const [featuredData, setFeaturedData] = useState("loading");
    const [featuredDataForm, setFeaturedDataForm] = useState({
        featured: {
            name: "",
            job: "",
            description: "",
            img_src: "",
            body: "",
            external_link: ""
        }
    })
    const [featuredUpdateQueue, setFeaturedUpdateQueue] = useState({array: []})

    useEffect(() => {
        loadFeaturedData();
    }, []);

    function loadFeaturedData() {
        API.getAllFeatured()
            .then(res => {
                setFeaturedData({array: res.data})
            })
            .catch(err => console.log(err));
    };

    //FORM FUNCTIONS
    function formInputChange(event) {
        let value = event.target.value;
        const path = event.target.dataset.path;
        updatePathHandlerForm(setFeaturedDataForm, path, featuredDataForm.post, value)
    }

    function postFeaturedData() {
        API.postFeatured(featuredDataForm.post)
            .then(() => {
                setFeaturedDataForm({
                    featured: {
                        name: "",
                        job: "",
                        description: "",
                        img_src: "",
                        body: "",
                        external_link: ""
                    }
                })
                loadFeaturedData()
            })
            .catch(err => console.log(err));
    }

    function updatePathHandlerForm (updateFunction, path, object, value) {
        // let newState = object
        var schema = object;  // a moving reference to internal object within obj
        var pList = path.split('.');
        for(var i = 0; i < pList.length-1; i++) {
          var elem = pList[i];
          if( !schema[elem] ) schema[elem] = {}
          schema = schema[elem];
        }
        schema[pList[pList.length-1]] = value;
        updateFunction({post: object})
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
        updatePathHandler(setFeaturedData, path, featuredData.array, value, index)
    }
    
    function updateUpdateQueue (event) {
        const path = event.target.dataset.path;
        const index = parseInt(event.target.dataset.index)
        updatePathHandler(setFeaturedUpdateQueue, path, featuredUpdateQueue.array, true, index)
    }
    
    function updateFeaturedData(path, value, id, index) {
        API.updateFeatured(id, {[path]: value})
           .then(res => {
            updatePathHandler(setFeaturedUpdateQueue, path, featuredUpdateQueue.array, false, parseInt(index))
            })
            .catch(err => console.log(err));
    }
    
    function updatePathHandler (updateFunction, path, array, value, index) {
        if (array[index] === undefined) {array[index]= {}}
        console.log(array)
        let newState = array[index]
        var schema = newState;  // a moving reference to internal object within obj
        var pList = path.split('.');
        for(var i = 0; i < pList.length-1; i++) {
          var elem = pList[i];
          if( !schema[elem] ) schema[elem] = {}
          schema = schema[elem];
        }
        schema[pList[pList.length-1]] = value;
        updateFunction({array: array})
    }

    //DELETE FUNCTNIOS
    function deleteFeatured(id) {
        API.deleteFeatured(id)
        .then(() => {
            loadFeaturedData()
        })
        .catch(err => console.log(err));
    }

    if (featuredData === "loading")
        return (<h1>LOADING</h1>);

    return (
        <FeaturedContext.Provider value={{
            featuredData, 
            featuredUpdateQueue, 
            featuredDataForm, 
            handleInputChange, 
            updateFeaturedData, 
            formInputChange, 
            postFeaturedData, 
            deleteFeatured}
        }>
            {children}
        </FeaturedContext.Provider>
    );
};

