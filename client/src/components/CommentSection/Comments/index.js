import React, { useState, useEffect } from 'react';
import API from '../../../utils/API'
import replyIcon from '../../../assets/reply-icon.png';
import { CommentEmbed } from 'disqus-react';

import './style.css'



const Comments = (postId) => {
  const [comments, setComments] = useState()
  let addReply = false;

  console.log(postId)

  useEffect(() => {
    const fetchComments = async () => {
      const res = await API.getComments(`postId=${postId.postId}`);
      setComments(res.data);
    }
    fetchComments()
  }, []);

  function handleAddReply() {
    addReply = true
  }

  if (!comments) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      {comments.map(comment => (
        <CommentEmbed
        commentId={comment._id}
        // showMedia={true}
        strong="test"
        showParentComment={true}
        width={420}
        height={320}
        />
      ))}

    </>
  )
}


export default Comments