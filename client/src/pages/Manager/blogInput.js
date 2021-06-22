import React, { useContext } from "react";
import {BlogContext} from './index'

const BlogInput = (props) => {
  // eslint-disable-next-line no-unused-vars
  const {blogForm, handleBlogInputChange} = useContext(BlogContext)

  const label = props.key1.replace(/_/g," ").split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')
  const value = `blogForm.${props.key1}`
  console.log(value)


  return (
    <>
      {props.inputType === "textarea" ? (
        <>
          <div className="data-form">
              <label>{label}:</label>
              <textarea style={{width: "100%", height: "200px", resize: "none"}} 
                className="management-input"
                data-key1={props.key1}
                // eslint-disable-next-line no-eval
                value={eval(value)}
                onChange={handleBlogInputChange} 
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
                // eslint-disable-next-line no-eval
                value={eval(value)}
                onChange={handleBlogInputChange} 
              />
              <br></br>
          </div>
        </>
      )}
    </>
  )
}

export default BlogInput