import React, { useContext, useState } from 'react';
import API from '../../../../utils/API';
import moment from 'moment';
import showRepliesIcon from '../../../../assets/commentIcons/showreplies.png';
import hideRepliesIcon from '../../../../assets/commentIcons/hidereplies.png';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
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
        // textInput.current.value = "";
        API.updateComment(props.comment._id, {
          $push: { replies: res.data._id }
        })
        setFormObject({
          username: "",
          body: "",
        })
      }).then(() => {
        props.loadComments()
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
            <div style={{ display: 'flex' }}>
              <p className="reply-name">{props.comment.userName} on {moment(props.comment.date_posted).format("l")}</p>
              <button onClick={toggleReplyState} className="show-replies">
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  {/* <p style={{margin:'0', padding:'0', fontSize:'13px'}}>replies</p> */}
                  <ExpandMoreIcon style={{ margin: '0', padding: '0', fontSize: '17px' }} />
                </div>
              </button>
            </div>
          </div>
        ) : (
          <>
            <div>
              <h3 className="reply-text" >{props.comment.body}</h3>
              <div style={{ display: 'flex' }}>

              <p className="reply-name">{props.comment.userName} on {moment(props.comment.date_posted).format("l")}</p>
              <button onClick={toggleReplyState} className="show-replies">
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  {/* <p style={{margin:'0', padding:'0', fontSize:'13px'}}>replies</p> */}
                  <ExpandLessIcon style={{ margin: '0', padding: '0', fontSize: '17px' }} />
                </div>
              </button>
              </div>
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
            <button onClick={toggleReplyFormState} type="submit" className="save-reply-btn show-replies" id="add-reply-btn">
              + Add Reply
            </button>
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