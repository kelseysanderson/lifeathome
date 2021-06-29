import React, { useState, useEffect } from 'react';
import API from '../../../../utils/API';
import moment from 'moment';
import showRepliesIcon from '../../../../assets/showreplies.png';
import hideRepliesIcon from '../../../../assets/hidereplies.png';
import './style.css';

const Comments = (props) => {
  const [formObject, setFormObject] = useState({});
  const [replyState, setReplystate] = useState({ shown: false })
  const [replyForm, setReplyForm] = useState({ shown: false })

  function handleFormSubmit(event) {
    if (formObject.username && formObject.body) {
      API.postComment({
        userName: formObject.username,
        body: formObject.body
      }).then(res => {
        console.log(props.comment._id)
        // textInput.current.value = "";
        API.updateComment(props.comment._id, {
          $push: { replies: res.data._id }
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

  function toggleReplyState() {
    setReplystate({ shown: !replyState.shown })
  }

  function toggleReplyFormState() {
    setReplyForm({ shown: !replyForm.shown })
  }

  function handleReplySubmit(event) {
    event.preventDefault()
    toggleReplyFormState();
    handleFormSubmit();
  }

  function handleHideReplies(event) {
    event.preventDefault()
    toggleReplyFormState();
    toggleReplyState();
  }

  return (
    <>
      <div>
        {!replyState.shown ? (
          <div className="comment-container">
            <h3 className="reply-text" >{props.comment.body}</h3>
            <p className="reply-name">{props.comment.userName} on {moment(props.comment.date_posted).format("l")}<button onClick={toggleReplyState} className="show-replies">Replies<img src={showRepliesIcon} alt="down caret" /></button></p>
          </div>
        ) : (
          <>
            <div>
              <h3 className="reply-text" >{props.comment.body}</h3>
              <p className="reply-name">{props.comment.userName} on {moment(props.comment.date_posted).format("l")}<button onClick={!replyForm.shown ? toggleReplyState : handleHideReplies} className="show-replies">Show Less<img src={hideRepliesIcon} alt="up caret" /></button></p>
            </div>
            {props.comment.replies === undefined ? (<></>) : (
              <>
                {props.comment.replies.map(reply => (
                  <div className="reply-container">
                    <h3 className="reply-text">{reply.body}</h3>
                    <p className="reply-name">{reply.userName} on {moment(reply.date_posted).format("l")}</p>
                  </div>
                ))}
              </>
            )}
            <button onClick={toggleReplyFormState} type="submit" className="save-reply-btn show-replies" id="add-reply-btn">+ Add Reply</button>
            {replyForm.shown ? (
              <div className="add-reply-container">
                <form method="post">
                  <input value={formObject.username} onChange={handleInputChange} className='form-control comment-name' name="username" placeholder="Name"></input>
                  <textarea value={formObject.body} onChange={handleInputChange} className='form-control reply-text-area' name="body" placeholder="Reply"></textarea>
                  <div className="text-right">
                    <button onClick={handleReplySubmit} type="submit" className="save-reply-btn green-btn">Reply</button>
                  </div>
                </form>
              </div>
            ) : (<></>)}
          </>
        )}
      </div>
    </>
  )
}


export default Comments