import React, { useContext } from "react";
import { BlogContext } from '../../Context/BlogContext';

const BlogDataFormInput = (props) => {
  const { blogDataForm, formInputChange } = useContext(BlogContext);

  //CREATES LABEL OUT OF PATH STRING
  const lastPath = props.path.split('.').pop()
  const label = lastPath.split("_").map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')

  //FINDS VALUE OUT OF PATH STRING
  const valueArr = props.path.split(".")
  const value = () => {
    try {
      return valueArr.reduce((object, property) => object[property], blogDataForm.post)
    } catch {
      return ""
    }
  }

  return (
    <>
      <div className="data-form">
        <label>{label}:</label>
        {/* TEXTAREA VS. INPUT */}
        {props.inputType === "textarea" ? (
          <textarea
            className={props.className ? props.className : ""}
            data-path={props.path}
            value={value()}
            onChange={formInputChange}
            style={{ height: "200px", resize: "none" }}
          />) : (<>
            {props.inputType === "blogBody" ? (
              <>
                <select data-path={props.path} onChange={formInputChange}>
                  <option disabled selected value> -- select an option -- </option>
                  <option value="text">
                    Text
                  </option>
                  <option value="embedded_video">
                    Embedded Video
                  </option>
                  <option value="link">
                    Link
                  </option>
                </select>
              </>) : (<>
                <input
                  className="management-input"
                  data-path={props.path}
                  value={value()}
                  onChange={formInputChange}
                  style={{ width: "100%" }}
                />
                <br></br>
              </>)}
          </>)}





      </div>
    </>
  )
}

export default BlogDataFormInput