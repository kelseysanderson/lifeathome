import React, { useState, createContext, useEffect } from "react";
import API from "../../utils/API.js";
import Input from "./input"


export const ManagerContext = createContext()

const Manager = (props) => {
  const [dataObj, setDataObj] = useState("loading");

  useEffect(() => {
    loadHomePage();
  }, []);

  function loadHomePage() {
    API.getSiteData()
    .then(res => {
        console.log(res.data[1])
        setDataObj(res.data[1])
    })
    .catch(err => console.log(err));
  };

  function handleInputChange (event) {
    console.log(event.target)
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const key1 = event.target.dataset.key1;
    const key2 = event.target.dataset.key2;

    console.log(dataObj[key1][key2])

    // Updating the input's state
    setDataObj({...dataObj,
      [key1]: {
        ...dataObj[key1],
          [key2]: value
      }
    });
  };

  function updateData () {
    console.log(dataObj)
    API.updateSiteData(dataObj._id, dataObj)
    .then(res => {
      console.log(res)
    })
    .catch(err => console.log(err));
  }

  return (
    <>
      {dataObj === "loading" ? (<><h1>LOADING</h1></>) : (
        <ManagerContext.Provider value={{dataObj, handleInputChange}}>
        <h1>DataBase Management</h1>
          <div className="management-card">
            <h2>Site Data</h2>
            <Input key1="siteData" key2="company_name"/>
            <Input key1="siteData" key2="contact_name"/>
            <Input key1="siteData" key2="contact_email"/>
            <Input key1="siteData" key2="contact_phone"/>
            <Input key1="siteData" key2="contact_location"/>
            <Input key1="siteData" key2="contact_facebook_link"/>
            <Input key1="siteData" key2="contact_instagram_link"/>
            <Input key1="siteData" key2="contact_twitter_link"/>
          </div>
          <br></br>
          <div className="management-card">
            <h2>Home Page Data</h2>

            <h4>Banner 1</h4>
            <Input key1="homePage" key2="banner_1_title"/>
            <Input key1="homePage" key2="banner_1_body"/>
            <Input key1="homePage" key2="banner_1_link_button_text"/>
            <Input key1="homePage" key2="banner_1_link"/>
            <br></br>

            <h4>Banner 2</h4>
            <Input key1="homePage" key2="banner_2_title"/>
            <Input key1="homePage" key2="banner_2_body"/>
            <Input key1="homePage" key2="banner_2_link_button_text"/>
            <Input key1="homePage" key2="banner_2_link"/>
            <br></br>

            <h4>About Statement</h4>
            <Input key1="homePage" key2="about_statement_title"/>
            <Input key1="homePage" key2="bout_statement_body"/>
            <br></br>

            <h4>Stat 1</h4>
            <Input key1="homePage" key2="stat_1_title"/>
            <Input key1="homePage" key2="stat_1_body"/>
            <Input key1="homePage" key2="stat_1_link_button_text"/>
            <Input key1="homePage" key2="stat_1_link"/>
            <br></br>

            <h4>Stat 2</h4>
            <Input key1="homePage" key2="stat_2_title"/>
            <Input key1="homePage" key2="stat_2_body"/>
            <Input key1="homePage" key2="stat_2_link_button_text"/>
            <Input key1="homePage" key2="stat_2_link"/>
            <br></br>

            <h4>Stat 3</h4>
            <Input key1="homePage" key2="stat_3_title"/>
            <Input key1="homePage" key2="stat_3_body"/>
            <Input key1="homePage" key2="stat_3_link_button_text"/>
            <Input key1="homePage" key2="stat_3_link"/>
            <br></br>

            <h4>Additional Box 1</h4>
            <Input key1="homePage" key2="additional_box_1_title"/>
            <Input key1="homePage" key2="additional_box_1_body"/>
            <Input key1="homePage" key2="additional_box_1_link_button_text"/>
            <Input key1="homePage" key2="additional_box_1_link"/>
            <br></br>

            <h4>Additional Box 2</h4>
            <Input key1="homePage" key2="additional_box_2_title"/>
            <Input key1="homePage" key2="additional_box_2_body"/>
            <Input key1="homePage" key2="additional_box_2_link_button_text"/>
            <Input key1="homePage" key2="additional_box_2_link"/>
            <br></br>

          </div>
          <br></br>
          <div className="management-card">
            <h2>Services Page Data</h2>
            <Input key1="servicesPage" key2="title"/>
            <Input key1="servicesPage" key2="body"/>
            <Input key1="servicesPage" key2="link_button_text"/>
            <Input key1="servicesPage" key2="link"/>
          </div>
          <br></br>
          <button onClick={updateData}>Update Data</button>
        </ManagerContext.Provider>
      )}
    </>
  )
 }

export default Manager