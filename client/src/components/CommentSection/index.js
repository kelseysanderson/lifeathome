import React, { useState, useEffect } from 'react';
import API from '../../utils/API'
import Comments from './Comments';
import './style.css'

const CommentSection = (props) => {
  const [formObject, setFormObject] = useState({});
  const textInput = React.useRef();
  const [comments, setComments] = useState()

  useEffect(() => {
    fetchComments();
  }, []);

  function fetchComments() {
    API.getComments(`postId=${props.postId}`)
      .then(res =>
        setComments(res.data))
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.username && formObject.body) {
      API.postComment({
        body: formObject.body,
        postId: props.postId
      }).then(res => {
        textInput.current.value = "";
        fetchComments();
      })
        .catch(err => console.log(err));
    }
  };

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };
  console.log(formObject)

  if (!comments) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="comment-container">
      <h1 className="single-blog-header" id="comment-title">Comments</h1>
      <div className="add-comment-container">
        <form method="post">
          <textarea ref={textInput} onChange={handleInputChange} placeholder="username" className='form-control username-text-area' name="username" placeholder="username"></textarea>
          <textarea ref={textInput} onChange={handleInputChange} className='form-control comment-text-area' name="body" placeholder="Comment"></textarea>
          <div className="text-right">
            <button onClick={handleFormSubmit} type="submit" className="save-comment-btn green-btn">Add Comment</button>
          </div>
        </form>
      </div>
      <Comments postId={props.postId} comments={comments} />
    </div>
  )

}


export default CommentSection