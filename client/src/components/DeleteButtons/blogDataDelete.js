import React, {useContext} from "react";
import {BlogContext} from '../../Context/BlogContext'

const BlogDataDelete = (props) => {
  const {deletePost} = useContext(BlogContext);

  return (
    <>
      <button><button className="red-btn" onClick={() => deletePost(props.postId)}>Delete Post</button></button>
    </>
  )
}

export default BlogDataDelete