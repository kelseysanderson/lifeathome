import React, {useContext} from "react";
import {SiteContext} from '../../Context/SiteContext'

const SiteDataInput = (props) => {
  const {siteData, siteUpdateQueue, handleInputChange, updateSiteData} = useContext(SiteContext);

  //CREATES LABEL OUT OF PATH STRING
  const lastPath = props.path.split('.').pop()
  const label = lastPath.split("_").map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')

  //FINDS VALUE OUT OF PATH STRING
  const valueArr = props.path.split(".")
  const value = valueArr.reduce((object, property) => object[property], siteData)

  //FINDS QUEUE STATUS
  const updateQueueStatus = () => { 
    try {
      return valueArr.reduce((object, property) => object[property], siteUpdateQueue)
    } catch {
      return false
    }
  }

  return (
    <>
      <div className="data-form">
        <label>{label}:</label>
        {/* TEXTAREA VS. INPUT */}
        {props.inputType === "textarea" ? (
        <textarea 
          className="management-input"
          data-path={props.path}
          value={value}
          onChange={handleInputChange}
          style={updateQueueStatus() ? ({border: "2px solid red", width: "100%", height: "200px", resize: "none"}) : ({border: "2px solid green", width: "100%", height: "200px", resize: "none"})} 
        />) : (
          <input 
          className="management-input"
          data-path={props.path}
          value={value}
          onChange={handleInputChange} 
          style={updateQueueStatus() ? ({border: "2px solid red", width: "100%"}) : ({border: "2px solid green", width: "100%"})}
        />)}
        {/* RENDERS UPDATE BUTTON */}
        {updateQueueStatus() ? (
        <>
          <button className="red-btn" onClick={() => updateSiteData(props.path, value)}>Update</button>
        </>) : (<></>)}
        <br></br>
      </div>
    </>
  )
}

export default SiteDataInput