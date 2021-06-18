import React, { useState, createContext } from "react";
// import API from "../../utils/API.js";
import Input from "./input"

export const ManagerContext = createContext()


const Manager = (props) => {
  const [dataObj, setDataObj] = useState({
    siteData: {
      company_name: "Life at Home",
      owner_name: "Mason Marshall"
    }
  });

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

  function updateDataBase () {
  }

  return(
    <>
      <ManagerContext.Provider value={{dataObj, handleInputChange}}>
      <h1>DataBase Management</h1>
        <div className="management-card">
          <h2>Site Data</h2>
          <Input key1="siteData" key2="company_name"/>
          <Input key1="siteData" key2="owner_name"/>
        </div>
        <br></br>
        <button onClick={updateDataBase}>Update DataBase</button>
      </ManagerContext.Provider>
    </>
   )
 }

export default Manager