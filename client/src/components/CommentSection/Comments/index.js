import React, { useState, useEffect } from 'react';
import API from '../../../utils/API'
import { Grid, Box } from '@material-ui/core';
import replyIcon from '../../../assets/reply-icon.png'
import './style.css'



const Comments = (postId) => {
  const [comments, setComments] = useState()
  // const userId = "01a"
  // // const avatarUrl = "https://ui-avatars.com/api/name=Riya&background=random"
  // const name = "xyz"
  // const signinUrl = "/signin"
  // const signupUrl = "/signup"
  // let count = 0
  // comment.map(i => { count += 1; i.replies && i.replies.map(i => count += 1) })
  console.log(postId)

  useEffect(() => {
    const fetchComments = async () => {
      const res = await API.getComments(`postId=${postId.postId}`);
      setComments(res.data);
    }
    fetchComments()
  }, []);

  console.log(comments)
  return (
    <>
    {comments.map(comment => (

    <div className="comment-container">
      <p className="no-margin">{comment.body}</p>
      <p className="no-margin">{comment.date_posted}</p>
      <p><img src={replyIcon} alt="grey reply icon arrow"></img>reply</p>
    </div>
    ))}
    </>

  )
}


export default Comments