import React from 'react';
import Comments from './Comments';
import './style.css'

const CommentSection = (props) => {
  return (
    <>
      <h1 className="single-blog-header" id="comment-title">Comments</h1>
      <div className="add-comment-container">
        <button className="single-blog-header" id="add-comment">+</button>
        <p>Add New Comment</p>
      </div>
      <Comments postId={props.postId}  />
    </>

  )

}

export default CommentSection