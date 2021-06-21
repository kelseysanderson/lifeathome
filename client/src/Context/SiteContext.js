import React, { useState, useEffect, createContext } from "react";
import API from "../utils/API";

export const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
    const [sitePage, setSitePage] = useState([]);

    useEffect(() => {
        loadSiteData();
    },[]);

    function loadSiteData() {
        API.getSite()
            .then(res =>
                setSitePage(res.data)
            )
            .catch(err => console.log(err));
    };

    if (!sitePage.length)
        return null;

    return (
        <SiteContext.Provider value={sitePage}>
            {children}
        </SiteContext.Provider>
    );
};

