import React, { useState, useEffect } from 'react';
import API from '../../../utils/API'
import replyIcon from '../../../assets/reply-icon.png';
// import Comment from "./Comments"

import './style.css'

const Comments = (props) => {
  const [formObject, setFormObject] = useState({});
  const [replyState, setReplystate] = useState(false)

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.username && formObject.body) {
      API.postComment({
        userName: formObject.username,
        body: formObject.body
      }).then(res => {
        console.log(props.comment._id)
        // textInput.current.value = "";
        API.updateComment(props.comment._id, {
          $push: {replies: res.data._id}
        })
        setFormObject({
          username: "",
          body: "",
        })
      }).then(()=> {
        props.fetchPost()
      }).catch(err => console.log(err));
    }
  };

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };

  // if (!props.postComments) {
  //   return <h2>Loading...</h2>;
  // }

  function displayReplyForm() {
    setReplystate(true)
  }

  function hideReplyForm() {
    setReplystate(false)
  }
  return (
    <>
      <div>
        <h2>{props.comment.body}</h2>
        <p>{props.comment.userName} on {props.comment.date_posted}</p>

        {!replyState ? (
          <button onClick={displayReplyForm} className="green-btn">Replies</button>
        ) : ( 
          <> 
            <button onClick={hideReplyForm} className="green-btn">Show Less</button>  
            <div className="add-comment-container">
              <form method="post">
                <textarea value={formObject.username} onChange={handleInputChange} placeholder="username" className='form-control username-text-area' name="username" placeholder="Name"></textarea>
                <textarea value={formObject.body} onChange={handleInputChange} className='form-control comment-text-area' name="body" placeholder="Comment"></textarea>
                <div className="text-right">
                  <button onClick={handleFormSubmit} type="submit" className="save-comment-btn green-btn">Add Comment</button>
                </div>
              </form>
            </div>
            {props.comment.replies === undefined ? (<></>) : (
              <>
              {props.comment.replies.map(reply => (
                <>
                  <h2>{reply.body}</h2>
                  <p>{reply.userName} on {reply.date_posted}</p>
                </>
              ))}
              </>
            )}
          </>
        )}
      </div>
    </>
  )
}


export default Comments