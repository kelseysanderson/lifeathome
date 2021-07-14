import React, { useContext, useState } from 'react';
import { LoginStatusContext } from '../../Context/LoginStatusContext';
import { BlogContext } from '../../Context/BlogContext';
import { useParams } from "react-router-dom";
import { Box } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import EditIcon from '@material-ui/icons/Edit';
import BlogDataInput from '../../components/Inputs/blogDataInput';
import BlogDataFormInput from '../../components/Inputs/blogDataFormInput';
import BlogButton from '../../components/APIButtons/blog';
import CommentSection from './CommentSection';
import moment from 'moment'
import './style.css';

const BlogPost = () => {
  const loggedInContext = (useContext(LoginStatusContext));
  const [editBtn, setEditBtn] = useState({ shown: false })
  const [toggleClass, setToggleClass] = useState({ edit: false, render: <EditIcon />, renderAddPost: <AddIcon /> });
  const [addPost, setAddPost] = useState({ shown: false, renderAddPost: <AddIcon /> })
  const { blogData, blogBodyInputs, appendInput, resetInputs, appendBlogBodyInput } = useContext(BlogContext);
  const { index } = useParams();
  const post = blogData.array[index];
  const loggedIn = loggedInContext.loginState

  function toggleEditBtn() {
    setEditBtn({ shown: !editBtn.shown })
    if (toggleClass.edit === false) {
      setToggleClass({
        edit: !toggleClass.edit,
        render:
          <VisibilityIcon className="icon" />
      })
    } else if (toggleClass.edit === true) {
      setToggleClass({
        edit: !toggleClass.edit,
        render:
          <EditIcon className="icon" />
      })
    }
  }

  function handleAddPost() {
    if (addPost.shown === true) {
      setAddPost({
        shown: false,
        renderAddPost: <AddIcon />
      })
    } else if (addPost.shown === false) {
      setAddPost({
        shown: true,
        renderAddPost: <RemoveIcon />
      })
    }
  }

  function blogBodyRender(section) {
    if (section.type === "text") {
      return (<p className="blog-paragraphs" >{section.data}</p>)
    }
    if (section.type === "embedded_video") {
      return (<p className="blog-paragraphs" >AS AN EMBEDDED VIDEO{section.data}</p>)
    }
    if (section.type === "link") {
      return (<a href={section.data} className="blog-paragraphs">Link</a>)
    }
    if (section.type === "image") {
      return (<div><img src={section.data} alt="blog-img" /></div>)
    }
  }

  return (
    <div>
      {loggedIn ? (
        <section className="edit-buttons">
          <IconButton onClick={toggleEditBtn}>
            {toggleClass.render}
          </IconButton>
          <IconButton onClick={handleAddPost}>
            {addPost.renderAddPost}
          </IconButton>
        </section>
      ) : null}
      {addPost.shown === true ? (
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: "15%", marginRight: "15%", justifyContent: "center" }}>
          <h1>Create New Post</h1>
          <BlogDataFormInput path="title" />
          <BlogDataFormInput path="author" />
          <BlogDataFormInput path="description" />
          <BlogDataFormInput path="img_src" />

          {blogBodyInputs.form.map((input, i) =>
            <div key={input}>
              <BlogDataFormInput path={"body." + input + ".type"} inputType="blogBody" />
              <BlogDataFormInput className="full-width full-height" path={"body." + input + ".data"} inputType="textarea" />
            </div>)}
          <button onClick={() => appendInput("form")}>
            ADD INPUT
          </button>
          <div onClick={() => resetInputs("form")}>
            <BlogButton.Submit />
          </div>
        </div>
      ) : null}
      {loggedIn && toggleClass.edit === true ? (
        <>
          <Box display="flex" flexDirection="column" justifyContent="flex-end" alignItems="center" style={{ marginBottom: "100px" }}>
            <h1 className="single-blog-header">{post.title}</h1>
            <div className="image-container">
              <img className="single-post-image" src={post.img_src} alt=""></img>
              <BlogDataInput {...post} key={post.img_src} index={index} className="admin-blog-input" path="image_src" />
            </div>
            <div>
              <BlogDataInput {...post} index={index} className="admin-blog-input" path="title" />
              <BlogDataInput {...post} index={index} className="admin-blog-input" path="author" />
              <BlogDataInput {...post} index={index} className="admin-blog-input" path="description" />
            </div>
          </Box>
          <div style={{ width: "70%", marginLeft: "15%", overflowWrap: "normal" }}>
            {post.body.map((section, i) => (
              <>
                <BlogButton.Reorder direction={"Up"} sectionIndex={i} objIndex={index} postId={post._id} />
                <BlogDataInput {...post} index={index} className="blog-paragraphs" path={"body." + i + ".type"} inputType="blogBody" />
                <BlogDataInput {...post} index={index} className="blog-paragraphs" path={"body." + i + ".data"} inputType="textarea" style={{ width: "70% !important" }} />
                <BlogButton.Reorder direction={"Down"} sectionIndex={i} objIndex={index} postId={post._id} />
                <BlogButton.DeleteBlogBody sectionIndex={i} objIndex={index} postId={post._id} />
              </>
            ))}
            <button onClick={() => appendBlogBodyInput(index, post.body.length)}>Add Section</button>
          </div>
          <div className="delete-row" style={{ marginRight: '50px' }}>
            <BlogButton.Delete postId={post._id} />
            <p>Delete Post</p>
          </div>
          <Box display="flex" flexDirection="column" justifyContent="flex-end" alignItems="center" style={{ marginBottom: "100px" }}>
            <CommentSection key={post._id} postId={post._id} className="blog-paragraphs " postComments={post.comments} />
          </Box>
        </>
      ) : (
        <Box display="flex" flexDirection="column" justifyContent="flex-end" alignItems="center" style={{ marginBottom: "100px" }}>
          <h1 className="single-blog-header">{post.title}</h1>
          <div className="image-container">
            <img className="single-post-image" src={post.img_src} alt=""></img>
          </div>
          <div>
            <p>{post.author}</p>
            <p>{moment(post.date_posted).format("LL")}</p>
          </div>
          {post.body.map((section, index) => (
            <div key={index}>
              {blogBodyRender(section)}
            </div>
          ))}
          <CommentSection key={post._id} postId={post._id} postComments={post.comments} />
        </Box>
      )}
    </div>
  )
}

export default BlogPost;