import React, { useState, useEffect, createContext } from "react";
import API from "../utils/API";

export const ServicesContext = createContext();

export const ServicesProvider = ({ children }) => {
    const [servicesData, setServicesData] = useState("loading");
    const [servicesDataForm, setServicesDataForm] = useState({
        post: {
            title: "",
            img_src: "",
            body: "",
            button_text: "",
            internal_link: ""
        }
    })
    const [servicesUpdateQueue, setServicesUpdateQueue] = useState({array: []})

    useEffect(() => {
        loadServicesData();
    }, []);

    function loadServicesData() {
        API.getServices()
            .then(res => {
                setServicesData({array: res.data})
            })
            .catch(err => console.log(err));
    };

    //FORM FUNCTIONS
    function formInputChange(event) {
        let value = event.target.value;
        const path = event.target.dataset.path;
        updatePathHandlerForm(setServicesDataForm, path, servicesDataForm.post, value)
    }

    function postServicesData() {
        API.postService(servicesDataForm.post)
            .then(() => {
                setServicesDataForm({
                    post: {
                        title: "",
                        img_src: "",
                        body: "",
                        button_text: "",
                        internal_link: ""
                    }
                })
                loadServicesData()
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
        updatePathHandler(setServicesData, path, servicesData.array, value, index)
    }
    
    function updateUpdateQueue (event) {
        const path = event.target.dataset.path;
        const index = parseInt(event.target.dataset.index)
        updatePathHandler(setServicesUpdateQueue, path, servicesUpdateQueue.array, true, index)
    }
    
    function updateServicesData(path, value, id, index) {
        API.updatePost(id, {[path]: value})
           .then(res => {
            updatePathHandler(setServicesUpdateQueue, path, servicesUpdateQueue.array, false, parseInt(index))
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
    function deleteService(id) {
        API.deleteService(id)
        .then(() => {
            loadServicesData()
        })
        .catch(err => console.log(err));
    }

    if (servicesData === "loading")
        return (<h1>LOADING</h1>);

    return (
        <ServicesContext.Provider value={{
            servicesData, 
            servicesUpdateQueue, 
            servicesDataForm, 
            handleInputChange, 
            updateServicesData, 
            formInputChange, 
            postServicesData, 
            deleteService}
        }>
            {children}
        </ServicesContext.Provider>
    );
};

