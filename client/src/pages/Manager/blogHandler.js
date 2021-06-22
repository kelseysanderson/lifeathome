import React from "react";


const BlogInput = (props) => {
  return (
    <li>
      <h4 className="database-management-title">{props.post.title}</h4>
      <button className="green-btn" data-id={props.post._id} onClick={props.deleteFunction}>Delete</button>
      <br></br>
    </li>
  )
}

export default BlogInput