import React, { useState, useEffect } from 'react';
import API from '../../../utils/API'
import { Grid, Box } from '@material-ui/core';
import replyIcon from '../../../assets/reply-icon.png'
import './style.css'



const Comments = (post) => {
  console.log(post) 
  // const [comment, setComment] = useState()
  // const userId = "01a"
  // // const avatarUrl = "https://ui-avatars.com/api/name=Riya&background=random"
  // const name = "xyz"
  // const signinUrl = "/signin"
  // const signupUrl = "/signup"
  // let count = 0
  // comment.map(i => { count += 1; i.replies && i.replies.map(i => count += 1) })

  // useEffect((comments) => {
  //   const fetchComments = async () => {
  //     const res = await API.getComments(comments);
  //     console.log(res.data);
  //   }
  //   fetchComments()
  // }, [comments]);
  

  return (
    <div className="comment-container">
      <p className="no-margin">Name</p>
      <p className="no-margin">date</p>
      <p className="no-margin">comment</p>
     <p><img src={replyIcon} alt="grey reply icon arrow"></img>reply</p>
    </div>

  )
}


export default Comments