import React, { useState } from 'react';
import API from '../../../utils/API';
import Comment from './Comments';
import './style.css';

const CommentSection = (props) => {
  const [formObject, setFormObject] = useState({});
  const textInput = React.useRef();

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.username && formObject.body) {
      API.postComment({
        userName: formObject.username,
        body: formObject.body
      }).then(res => {
        console.log(props.postId)
        API.updatePost(props.postId, {
          $push: { comments: res.data._id }
        })
        setFormObject({
          username: "",
          body: "",
        })
      }).then(() => {
        props.fetchPost()
      }).catch(err => console.log(err));
    }
  };

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };

  if (!props.postComments) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="comment-container">
      <h1 className="single-blog-header" id="comment-title">Comments</h1>
      <div className="add-comment-container">
        <form method="post">
          <input ref={textInput} value={formObject.username} onChange={handleInputChange} placeholder="Name" className='form-control username-text-area' name="username" ></input>
          <textarea ref={textInput} value={formObject.body} onChange={handleInputChange} className='form-control comment-text-area' name="body" placeholder="Comment"></textarea>
          <div className="text-right">
            <button onClick={handleFormSubmit} type="submit" className="save-comment-btn green-btn">Add Comment</button>
          </div>
        </form>
      </div>
      {props.postComments.map((comment, index) => (
        <Comment key={index} comment={comment} fetchPost={props.fetchPost} postId={props.postId} />
      ))}
    </div>
  )

}

export default CommentSection;