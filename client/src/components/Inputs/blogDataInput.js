import React, {useContext} from "react";
import {BlogContext} from '../../Context/BlogContext'

const BlogDataInput = (props) => {
  const {blogData, blogUpdateQueue, handleInputChange, updateBlogData} = useContext(BlogContext);

  //CREATES LABEL OUT OF PATH STRING
  const lastPath = props.path.split('.').pop()
  const label = lastPath.split("_").map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')

  //FINDS VALUE OUT OF PATH STRING
  const valueArr = props.path.split(".")
  const value = valueArr.reduce((object, property) => object[property], blogData.array[props.index])

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
        <textarea 
          className="management-input"
          data-path={props.path}
          data-index={props.index}
          value={value}
          onChange={handleInputChange}
          style={updateQueueStatus() ? ({border: "2px solid red", width: "100%", height: "200px", resize: "none"}) : ({border: "2px solid green", width: "100%", height: "200px", resize: "none"})} 
        />) : (
          <input 
          className="management-input"
          data-path={props.path}
          data-index={props.index}
          value={value}
          onChange={handleInputChange} 
          style={updateQueueStatus() ? ({border: "2px solid red", width: "100%"}) : ({border: "2px solid green", width: "100%"})}
        />)}
        {/* RENDERS UPDATE BUTTON */}
        {updateQueueStatus() ? (
        <>
          <button className="red-btn" onClick={() => updateBlogData(props.path, value, props._id, props.index)}>Update</button>
        </>) : (<></>)}
        <br></br>
      </div>
    </>
  )
}

export default BlogDataInput