import React, { useState, useEffect, createContext } from "react";
import API from "../utils/API";

export const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
    const [siteData, setSiteData] = useState("loading");
    const [siteDataForm, setSiteDataForm] = useState({
        login: {
            username: "",
            password: "",
        }
    })
    const [siteUpdateQueue, setSiteUpdateQueue] = useState({})

    useEffect(() => {
        loadSiteData();
    }, []);

    function loadSiteData() {
        API.getSite()
            .then(res => {
                setSiteData(res.data[0])
            })
            .catch(err => console.log(err));
    };

    //FORM FUNCTIONS
    function formInputChange(event) {
        let value = event.target.value;
        const path = event.target.dataset.path;
        updatePathHandlerForm(setSiteDataForm, path, { ...siteDataForm }, value)
    }

    function updateLoginSiteData() {
        API.updateLogin(siteData._id, siteDataForm)
            .then(() => {
                setSiteDataForm({
                    login: {
                        username: "",
                        password: "",
                    }
                })
                loadSiteData()
            })
            .catch(err => console.log(err));
    }

    function updatePathHandlerForm(updateFunction, path, object, value) {
        var schema = object;  // a moving reference to internal object within obj
        var pList = path.split('.');
        for (var i = 0; i < pList.length - 1; i++) {
            var elem = pList[i];
            if (!schema[elem]) schema[elem] = {}
            schema = schema[elem];
        }
        schema[pList[pList.length - 1]] = value;
        updateFunction(object)
    }

    //UPDATE FUNCTIONS

    function handleInputChange(event) {
        updateInputChange(event)
        updateUpdateQueue(event)
    }

    function updateInputChange(event) {
        let value = event.target.value;
        const path = event.target.dataset.path;
        updatePathHandler(setSiteData, path, { ...siteData }, value)
    }

    function updateUpdateQueue(event) {
        const path = event.target.dataset.path;
        updatePathHandler(setSiteUpdateQueue, path, { ...siteUpdateQueue }, true)
    }

    function updateSiteData(path, value) {
        API.updateSite(siteData._id, { [path]: value })
            .then(res => {
                updatePathHandler(setSiteUpdateQueue, path, { ...siteUpdateQueue }, false)
            })
            .catch(err => console.log(err));
    }

    function updatePathHandler(updateFunction, path, object, value) {
        let newState = object
        var schema = newState;  // a moving reference to internal objects within obj
        var pList = path.split('.');
        for (var i = 0; i < pList.length - 1; i++) {
            var elem = pList[i];
            if (!schema[elem]) schema[elem] = {}
            schema = schema[elem];
        }
        schema[pList[pList.length - 1]] = value;
        updateFunction(newState)
    }


  if (siteData === "loading")
    return (<h1>LOADING</h1>);
  

    return (
        <SiteContext.Provider value={{ siteData, siteUpdateQueue, siteDataForm, handleInputChange, updateSiteData, formInputChange, updateLoginSiteData }}>
            {children}
        </SiteContext.Provider>
    );
}



