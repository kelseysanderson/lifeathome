import React, { useContext } from "react";
import { BlogContext } from '../../Context/BlogContext';
import TextareaAutosize from 'react-textarea-autosize';


const BlogDataInput = (props) => {
  const { blogData, blogUpdateQueue, handleInputChange, updateBlogData } = useContext(BlogContext);

  //CREATES LABEL OUT OF PATH STRING
  const lastPath = props.path.split('.').pop()
  const label = lastPath.split("_").map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')

  //FINDS VALUE OUT OF PATH STRING
  const valueArr = props.path.split(".")
  const value = () => {
    try {
      return valueArr.reduce((object, property) => object[property], blogData.array[props.index])
    } catch {
      return ""
    }
  }

  //FINDS QUEUE STATUS
  const updateQueueStatus = () => {
    try {
      return valueArr.reduce((object, property) => object[property], blogUpdateQueue.array[props.index])
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
          <TextareaAutosize
            className={props.className ? props.className : ""}
            data-path={props.path}
            data-index={props.index}
            value={value()}
            onChange={handleInputChange}
            style={updateQueueStatus() ? ({ border: "0.25px solid #EE5F5F", resize: "none", padding: "5px", borderRadius: "5px", }) : ({ border: "0.25px solid #AED3BE", borderRadius: "5px", padding: "5px", outline: "none", resize: "none" })}
          />) : (<>
            {props.inputType === "blogBody" ? (
              <select data-path={props.path} data-index={props.index} onChange={handleInputChange}>
                <option disabled selected={value() === "new" ? ("selected") : ("")} value="text"> -- select an option -- </option>
                <option value="text" selected={value() === "text" ? ("selected") : ("")}>
                  Text
                </option>
                <option value="embedded_video" selected={value() === "embedded_video" ? ("selected") : ("")}>
                  Embedded Video
                </option>
                <option value="link" selected={value() === "link" ? ("selected") : ("")}>
                  Link
                </option>
                <option value="image" selected={value() === "image" ? ("selected") : ("")}>
                  Image
                </option>
              </select>
            ) : (
              <input
                className={props.className ? props.className : ""}
                data-path={props.path}
                data-index={props.index}
                value={value()}
                onChange={handleInputChange}
                style={updateQueueStatus() ? ({ border: "0.25px solid #EE5F5F", resize: "none", padding: "5px", borderRadius: "5px" }) : ({ border: "0.25px solid #AED3BE", borderRadius: "5px", padding: "5px", resize: "none" })}
              />)}
          </>)}
        {/* RENDERS UPDATE BUTTON */}
        {updateQueueStatus() ? (
          <>
            {console.log(value())}
            <button className="red-btn" onClick={() => updateBlogData(props.path, value(), props._id, props.index)}>Update</button>
          </>) : (<></>)}
        <br></br>
      </div>
    </>
  )
}

export default BlogDataInput