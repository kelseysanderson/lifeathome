import React, { useContext } from "react";
import { BlogContext } from '../../Context/BlogContext';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const BlogDataDelete = (props) => {
  const { deletePost } = useContext(BlogContext);

  return (
      <IconButton onClick={() => deletePost(props.postId)}>
        <DeleteIcon />
      </IconButton>
  )
}

export default BlogDataDelete