import React from "react";


const BlogInput = (props) => {
  return (
    <>
      <h4>{props.post.title}</h4>
      <button data-id={props.post._id} onClick={props.deleteFunction}>Delete</button>
      <br></br>
    </>
  )
}

export default BlogInput