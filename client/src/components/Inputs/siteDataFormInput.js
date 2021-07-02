import React, { useContext } from "react";
import { SiteContext } from '../../Context/SiteContext'

const SiteDataFormInput = (props) => {
  const { siteDataForm, formInputChange } = useContext(SiteContext);

  //CREATES LABEL OUT OF PATH STRING
  const lastPath = props.path.split('.').pop()
  const label = lastPath.split("_").map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')

  //FINDS VALUE OUT OF PATH STRING
  const valueArr = props.path.split(".")
  const value = () => {
    try {
      return valueArr.reduce((object, property) => object[property], siteDataForm)
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
            className="management-input"
            data-path={props.path}
            value={value()}
            onChange={formInputChange}
            style={{ width: "100%", height: "200px", resize: "none" }}
          />) : (
          <input
            className="management-input"
            data-path={props.path}
            value={value()}
            onChange={formInputChange}
            style={{ width: "100%" }}
          />)}
        <br></br>
      </div>
    </>
  )
}

export default SiteDataFormInput