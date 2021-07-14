import React, { useContext } from "react";
import { BlogContext } from '../../Context/BlogContext';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
//requires postId
const Delete = (props) => {
  const { deletePost } = useContext(BlogContext);

  return (
    <IconButton onClick={() => deletePost(props.postId)} style={{ color: 'rgb(177, 9, 9)' }}>
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

//requires sectionIndex, objIndex, direction, and postId
const Reorder = (props) => {
  const { reorderBlogBody, blogCounter } = useContext(BlogContext);
  return (
    <>
      {blogCounter.array[props.objIndex] === 0 || blogCounter.array[props.objIndex] === undefined ? (
        <>
          <button style={{backgroundColor:'whitesmoke', border:'none', borderRadius:"5px", padding:'1px', width: '6%', height:"35px", marginLeft:'47%'}} onClick={() => reorderBlogBody(props.sectionIndex, props.objIndex, props.direction, props.postId)}>
            {props.direction === "Up" ? 
            <ArrowUpwardIcon style={{fontSize:"15px", fontWeight:'bold'}} /> 
            : <ArrowDownwardIcon style={{fontSize:"15px", fontWeight:'bold'}}/> 
            }
            </button>
        </>
      ) : (
        <></>
      )}
    </>
  )
}

//requires sectionIndex, objIndex and postId
const DeleteBlogBody = (props) => {
  const { deleteBlogBody, blogCounter } = useContext(BlogContext);
  return (
    <>
      {blogCounter.array[props.objIndex] === 0 || blogCounter.array[props.objIndex] === undefined ? (
        <>
          <IconButton onClick={() => deleteBlogBody(props.sectionIndex, props.objIndex, props.postId)} style={{ color: 'rgb(177, 9, 9)' }}>
            <DeleteIcon />
          </IconButton>
        </>
      ) : (
        <></>
      )}
    </>
  )
}

const BlogButton = { Delete, Submit, Reorder, DeleteBlogBody }

export default BlogButton