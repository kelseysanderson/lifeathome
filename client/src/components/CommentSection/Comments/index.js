import React, { useState, useEffect } from 'react';
import API from '../../../utils/API'
import replyIcon from '../../../assets/reply-icon.png'
import './style.css'



const Comments = (postId) => {
  const [comments, setComments] = useState()
  const [loading, setLoading] = useState(false);

  console.log(postId)

  useEffect(() => {
    const fetchComments = async () => {
      setLoading(true);

      const res = await API.getComments(`postId=${postId.postId}`);
      setComments(res.data);
      setLoading(false);

    }
    fetchComments()
  }, []);

  console.log(comments)

  if (!comments) {
    return <h2>Loading...</h2>;
  }
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