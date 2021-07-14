import React, { useContext } from "react";
import { FeaturedContext } from '../../Context/FeaturedContext';
import TextareaAutosize from 'react-textarea-autosize';


const FeaturedDataInput = (props) => {
  const { featuredData, featuredUpdateQueue, handleInputChange, updateFeaturedData } = useContext(FeaturedContext);

  //CREATES LABEL OUT OF PATH STRING
  const lastPath = props.path.split('.').pop()
  const label = lastPath.split("_").map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')

  //FINDS VALUE OUT OF PATH STRING
  const valueArr = props.path.split(".")
  const value = valueArr.reduce((object, property) => object[property], featuredData.array[props.index])

  //FINDS QUEUE STATUS
  const updateQueueStatus = () => {
    try {
      return valueArr.reduce((object, property) => object[property], featuredUpdateQueue.array[props.index])
    } catch {
      return false
    }
  }

  return (
    <>
        <label>{label}:</label>
        {/* TEXTAREA VS. INPUT */}
        {props.inputType === "textarea" ? (
          <TextareaAutosize
            className={props.className ? props.className : ""}
            data-path={props.path}
            data-index={props.index}
            value={value}
            onChange={handleInputChange}
            style={updateQueueStatus() ? ({ border: "0.25px solid #EE5F5F", resize: "none", padding: "5px", borderRadius: "5px", }) : ({ border: "0.25px solid #AED3BE", borderRadius: "5px", padding: "5px", outline: "none", resize: "none" })}
          />) : (
          <input
            className={props.className ? props.className : ""}
            data-path={props.path}
            data-index={props.index}
            value={value}
            onChange={handleInputChange}
            style={updateQueueStatus() ? ({ border: "0.25px solid #EE5F5F", resize: "none", padding: "5px", borderRadius: "5px"}) : ({ border: "0.25px solid #AED3BE", borderRadius: "5px", padding: "5px", resize: "none" })}
          />)}
        {/* RENDERS UPDATE BUTTON */}
        {updateQueueStatus() ? (
          <>
            <button className="red-btn" onClick={() => updateFeaturedData(props.path, value, props._id, props.index)}>Update</button>
          </>) : (<></>)} 
        <br></br>
    </>
  )
}

export default FeaturedDataInput