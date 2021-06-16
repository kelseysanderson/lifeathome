import React, { useState, useEffect, createContext } from "react";
import API from "../utils/API";

export const SiteContext = createContext();
console.log("new context: " + SiteContext);


export const SiteProvider = ({ children }) => {
    const [homePage, setHomePage] = useState([]);

  useEffect(() => {
    loadSiteData();
  }, []);

  function loadSiteData() {
    console.log('loadSiteData function')
    API.getSite()
      .then(res =>
        setHomePage(res.data),
      )
      .catch(err => console.log(err));
  };

  console.log("here")

  return (
    <SiteContext.Provider value={homePage}>
        {children}
    </SiteContext.Provider>
  );
};

