import React, { useState, useEffect } from 'react';
import API from '../../utils/API'
import Comments from './Comments';
import './style.css'

const CommentSection = (props) => {
  const [formObject, setFormObject] = useState({});
  const textInput = React.useRef();
  // const [comments, setComments] = useState()

  // useEffect(() => {
  //   fetchComments();
  // }, []);

  // function fetchComments() {
  //   API.getComments(`postId=${props.postId}`)
  //     .then(res =>
  //       setComments(res.data))
  // }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.username && formObject.body) {
      API.postComment({
        userName: formObject.username,
        body: formObject.body
      }).then(res => {
        console.log(props.postId)
        // textInput.current.value = "";
        API.updatePost(props.postId, {
          $push: {comments: res.data._id}
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
  // console.log(formObject)

  if (!props.postComments) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="comment-container">
      <h1 className="single-blog-header" id="comment-title">Comments</h1>
      <div className="add-comment-container">
        <form method="post">
          <textarea ref={textInput} value={formObject.username} onChange={handleInputChange} placeholder="username" className='form-control username-text-area' name="username" placeholder="Name"></textarea>
          <textarea ref={textInput} value={formObject.body} onChange={handleInputChange} className='form-control comment-text-area' name="body" placeholder="Comment"></textarea>
          <div className="text-right">
            <button onClick={handleFormSubmit} type="submit" className="save-comment-btn green-btn">Add Comment</button>
          </div>
        </form>
      </div>
      <Comments postId={props.postId} comments={props.postComments} />
    </div>
  )

}

export default CommentSection