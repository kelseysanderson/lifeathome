import React, { useContext } from "react";
import {ManagerContext} from './index'

const Input = (props) => {
  // eslint-disable-next-line no-unused-vars
  const {dataObj, handleInputChange} = useContext(ManagerContext)

  const label = props.key2.replace(/_/g," ").split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')
  const value = `dataObj.${props.key1}.${props.key2}`

  return (
    <>
      {props.inputType === "textarea" ? (
        <>
          <div className="data-form">
              <label>{label}:</label>
              <textarea style={{width: "100%", height: "200px", resize: "none"}} 
                className="management-input"
                data-key1={props.key1}
                data-key2={props.key2} 
                // eslint-disable-next-line no-eval
                value={eval(value)}
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
                data-key1={props.key1}
                data-key2={props.key2} 
                // eslint-disable-next-line no-eval
                value={eval(value)}
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