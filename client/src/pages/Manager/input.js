import React, { useContext } from "react";
import {ManagerContext} from './index'

const Input = (props) => {
  // eslint-disable-next-line no-unused-vars
  const {dataObj, handleInputChange} = useContext(ManagerContext)


  // const label = props.path.replace(/_/g," ").split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')
  const labelArr = props.path.split('.').splice(1)
  const label = labelArr.map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')

  const value = (`dataObj.` + props.path)
  console.log(value)

  return (
    <>
      {props.inputType === "textarea" ? (
        <>
          <div className="data-form">
              <label>{label}:</label>
              <textarea style={{width: "100%", height: "200px", resize: "none"}} 
                className="management-input"
                data-path={props.path}
                // eslint-disable-next-line no-eval
                value={value}
                onChange={handleInputChange} 
              />
              <br></br>
          </div>
        </>
      ) : (
        <>
          <div className="data-form">
              <label>{label}:</label>
              <input style={{width: "100%"}}
                className="management-input"
                data-path={props.path}
                // eslint-disable-next-line no-eval
                value={value}
                onChange={handleInputChange} 
              />
              <br></br>
          </div>
        </>
      )}
    </>
  )
}

export default Input