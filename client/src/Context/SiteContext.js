import React, { useState, useEffect, createContext } from "react";
import API from "../utils/API";

export const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
    const [sitePage, setSitePage] = useState("loading");

    useEffect(() => {
        loadSiteData();
    }, []);

    function loadSiteData() {
        API.getSite()
            .then(res => {
                setSitePage(res.data[0])
            }
            )
            .catch(err => console.log(err));
    };

    if (sitePage === "loading")
        return (<h1>LOADING</h1>);

    return (
        <SiteContext.Provider value={sitePage}>
            {children}
        </SiteContext.Provider>
    );
};

