import React, { useContext } from "react";
import { BlogContext } from '../../Context/BlogContext';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const Delete = (props) => {
  const { deletePost } = useContext(BlogContext);

  return (
      <IconButton onClick={() => deletePost(props.postId)} style={{color:'rgb(177, 9, 9)'}}>
        <DeleteIcon />
      </IconButton>
  )
}

const Submit = (props) => {
  const { postBlogData } = useContext(BlogContext);

  return (
      <button onClick={postBlogData} className="green-btn">Post to Blog</button>
  )
}

const BlogButton = {Delete, Submit}

export default BlogButton