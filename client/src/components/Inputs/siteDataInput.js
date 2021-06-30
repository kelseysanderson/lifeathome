import React, {useContext} from "react";
import {SiteContext} from '../../Context/SiteContext';
import TextareaAutosize from 'react-textarea-autosize';

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
        {/* <label>{label}:</label> */}
        {/* TEXTAREA VS. INPUT */}
        {props.inputType === "textarea" ? (
        <TextareaAutosize
          // className="management-input"
          className={props.className}
          data-path={props.path}
          value={value}
          onChange={handleInputChange}
          style={updateQueueStatus() ? ({ border: "0.25px solid #EE5F5F", resize: "none", padding:"8px",}) : ({border: "0.25px solid #AED3BE", borderRadius: "5px", padding:"5px", outline:"none", resize: "none"})} 
        />) : (
          <input 
          // className="management-input"
          className={props.className}
          data-path={props.path}
          value={value}
          onChange={handleInputChange} 
          style={updateQueueStatus() ? ({border: "0.25px solid #EE5F5F", resize: "none", padding:"8px",}) : ({border: "0.25px solid #AED3BE", borderRadius: "5px", padding:"5px", resize: "none"})}
        />)}
        {/* RENDERS UPDATE BUTTON */}
        {updateQueueStatus() ? (
        <>
          <button className="red-btn" id={props.updateBtn ? props.updateBtn : ""} onClick={() => updateSiteData(props.path, value)}>Update</button>
        </>) : (<></>)}
        <br></br>
      </div>
    </>
  )
}

export default SiteDataInput