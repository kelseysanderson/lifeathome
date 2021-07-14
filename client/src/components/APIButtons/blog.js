import React, { useContext } from "react";
import { BlogContext } from '../../Context/BlogContext';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

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

  console.log(blogCounter.array[props.objIndex])
  return (
    <>
      {blogCounter.array[props.objIndex] === 0 || blogCounter.array[props.objIndex] === undefined ? (
        <>
          <button onClick={() => reorderBlogBody(props.sectionIndex, props.objIndex, props.direction, props.postId)}>{props.direction}</button>
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

//requires sectionIndex and direction
const ReorderForm = (props) => {
  const { reorderBlogBodyForm } = useContext(BlogContext);

  return (
    <button onClick={() => reorderBlogBodyForm(props.sectionIndex, props.direction)}>{props.direction}</button>
  )
}

//requires sectionIndex
const DeleteBlogBodyForm = (props) => {
  const { deleteBlogBodyForm } = useContext(BlogContext);

  return (
    <IconButton onClick={() => deleteBlogBodyForm(props.sectionIndex)} style={{ color: 'rgb(177, 9, 9)' }}>
      <DeleteIcon />
    </IconButton>
  )
}

const BlogButton = { Delete, Submit, Reorder, DeleteBlogBody, ReorderForm, DeleteBlogBodyForm }

export default BlogButton