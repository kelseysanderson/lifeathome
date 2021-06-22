import React, { useState, useEffect } from 'react';
import API from '../../../../utils/API'
import replyIcon from '../../../../assets/reply-icon.png';

import './style.css'



const Comments = (props) => {
  console.log(props)

  function displayReplyForm() {

  }


  return (
    <>
      {props.comments.map(comment => (
       <div>
         <h2>{comment.body}</h2>
         <p>{comment.date_posted}</p>
         <button onClick={displayReplyForm} className="green-btn">Reply</button>
       </div>
      ))}

    </>
  )
}


export default Comments