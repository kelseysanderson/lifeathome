import React, { useContext} from "react";
import {ManagerContext, UpdateQueueContext} from './index'

const Input = (props) => {
  const {dataObj, handleInputChange, updateSiteData} = useContext(ManagerContext)
  const {updateQueue} = useContext(UpdateQueueContext)

  //CREATES LABEL OUT OF PATH STRING
  const lastPath = props.path.split('.').pop()
  const label = lastPath.split("_").map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')

  //FINDS VALUE OUT OF PATH STRING
  const valueArr = props.path.split(".")
  const value = valueArr.reduce((object, property) => object[property], dataObj)

  //FINDS QUEUE STATUS
  const updateQueueStatus = () => { 
    try {
      return valueArr.reduce((object, property) => object[property], updateQueue)
    } catch {
      return false
    }
  }

  return (
    <>
      {/* TEXTAREA VS. INPUT */}
      {props.inputType === "textarea" ? (
        <>
          <div className="data-form">
              <label>{label}:</label>
              <textarea 
                className="management-input"
                data-path={props.path}
                value={value}
                onChange={handleInputChange}
                style={updateQueueStatus() ? ({border: "2px solid red", width: "100%", height: "200px", resize: "none"}) : ({border: "2px solid green", width: "100%", height: "200px", resize: "none"})} 
              />
              {updateQueueStatus() ? (
              <>
                <button className="red-btn" onClick={() => updateSiteData(props.path, value)}>Update</button>
              </>) : (<></>)}
              <br></br>
          </div>
        </>
      ) : (
        <>
          <div className="data-form">
              <label>{label}:</label>
              <input 
                className="management-input"
                data-path={props.path}
                value={value}
                onChange={handleInputChange} 
                style={updateQueueStatus() ? ({border: "2px solid red", width: "100%"}) : ({border: "2px solid green", width: "100%"})}
              />
              {updateQueueStatus() ? (
              <>
                <button className="red-btn" onClick={() => updateSiteData(props.path, value)}>Update</button>
              </>) : (<></>)}
              <br></br>
          </div>
        </>
      )}
    </>
  )
}

export default Input