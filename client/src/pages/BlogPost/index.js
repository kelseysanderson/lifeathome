import React, { useContext, useState, useEffect} from 'react';
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
import moment from 'moment';
import './style.css';

const BlogPost = () => {
  const loggedInContext = (useContext(LoginStatusContext));
  const [editBtn, setEditBtn] = useState({ shown: false })
  const [toggleClass, setToggleClass] = useState({ edit: false, render: <EditIcon />, renderAddPost: <AddIcon /> });
  const [addPost, setAddPost] = useState({ shown: false, renderAddPost: <AddIcon /> })
  const { blogData, blogDataForm, appendInput, appendBlogBodyInput } = useContext(BlogContext);
  const { index } = useParams();
  const post = blogData.array[index];
  const loggedIn = loggedInContext.loginState;
  
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
      return (<iframe className="blog-video" width="560" height="315" src={section.data} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      )
    }
    if (section.type === "link") {
      return (<a href={section.data} className="blog-links" target="_blank" rel="noreferrer" >{section.data}</a>)
    }
    if (section.type === "image") {
      return (<img src={section.data} className="blog-img" alt="blog-img" />)
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

          {blogDataForm.post.body.map((input, i) =>
            <div key={i}>
              <BlogButton.ReorderForm direction={"Up"} sectionIndex={i} />
              <BlogDataFormInput path={"body." + i + ".type"} inputType="blogBody" />
              <BlogDataFormInput className="full-width blog-form-textarea" path={"body." + i + ".data"} inputType="textarea" />
              <BlogButton.ReorderForm direction={"Down"} sectionIndex={i}/>
              <BlogButton.DeleteBlogBodyForm sectionIndex={i} />
            </div>)}
          <div className="add-input">
            <button className="green-btn add-input-btn" onClick={() => appendInput()}>
              <p>+ Add Input</p>
            </button>
            <BlogButton.Submit />
          </div>
        </div>
      ) : null}
      {loggedIn && toggleClass.edit === true ? (
        <>
          <Box display="flex" flexDirection="column" justifyContent="flex-end" alignItems="center" style={{ marginBottom: "50px" }}>
            <h1 className="single-blog-header">{post.title}</h1>
            <div className="image-container">
              <img className="single-post-image" src={post.img_src} alt={post.img_description}></img>
              <BlogDataInput {...post} key={post.img_src} index={index} className="admin-blog-input" path="img_src" />
              <BlogDataInput {...post} key={post.img_src} index={index} className="admin-blog-input" path="img_description" />
            </div>
            <div >
              <BlogDataInput {...post} index={index} className="admin-blog-input" path="title" />
              <BlogDataInput {...post} index={index} className="admin-blog-input" path="author" />
              <BlogDataInput {...post} index={index} className="admin-blog-input" path="description" />
            </div>
          </Box>
          <hr style={{ borderBottom: "1px dashed #2E343C" }}></hr>
          <div style={{ width: "70%", marginLeft: "15%", overflowWrap: "normal" }}>
            {post.body.map((section, i) => (
              <div key={section._id} style={{ margin: "10px 0", padding: '10px 0', borderBottom: "1px dashed #2E343C" }}>
                <div>
                  <BlogButton.Reorder direction={"Up"} sectionIndex={i} objIndex={index} postId={post._id} />
                  <BlogDataInput {...post} index={index} className="blog-paragraphs-input" path={"body." + i + ".type"} inputType="blogBody" />
                  <BlogDataInput {...post} index={index} className="blog-paragraphs-input" path={"body." + i + ".data"} inputType="textarea" style={{ width: "70% !important" }} />
                  <div style={{ marginLeft: '92%' }}>
                    <BlogButton.DeleteBlogBody sectionIndex={i} objIndex={index} postId={post._id} />
                  </div>
                  <BlogButton.Reorder direction={"Down"} sectionIndex={i} objIndex={index} postId={post._id} />
                </div>
              </div>
            ))}
            <button className="orange-btn" onClick={() => appendBlogBodyInput(index, post.body.length)}>Add New Section</button>
          </div>
          <div className="delete-row" style={{ marginRight: '50px', marginTop: '50px' }}>
            <p>Delete Post</p>
            <BlogButton.Delete postId={post._id} />
          </div>
          <Box display="flex" flexDirection="column" justifyContent="flex-end" alignItems="center" style={{ marginBottom: "100px" }}>
            <CommentSection key={post._id} postId={post._id} className="blog-paragraphs " postComments={post.comments} />
          </Box>
        </>
      ) : (
        <Box display="flex" flexDirection="column" justifyContent="flex-end" alignItems="center" style={{ marginBottom: "100px" }}>
          <h1 className="single-blog-header">{post.title}</h1>
          <div className="image-container">
            <img className="single-post-image" src={post.img_src} alt={`${post.img_description}`}></img>
            {/* <figcaption>Image: {post.img_description}</figcaption> */}
          </div>
          <div>
            <p>{post.author}</p>
            <p>{moment(post.date_posted).format("LL")}</p>
          </div>
          {post.body.map((section, index) => (
            <div style={{ width: '70%' }} key={index}>
              {blogBodyRender(section)}
            </div>
          ))}
          <CommentSection key={post._id} postId={post._id} postComments={post.comments}/>
        </Box>
      )}
    </div>
  )
}

export default BlogPost;