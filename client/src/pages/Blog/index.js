import React, { useState, useContext } from 'react';
import { LoginStatusContext } from '../../Context/LoginStatusContext';
import { BlogContext } from '../../Context/BlogContext';
import { FeaturedContext } from '../../Context/FeaturedContext';
import Post from './Post';
import TablePagination from '@material-ui/core/TablePagination';
import { Grid } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import EditIcon from '@material-ui/icons/Edit';
import BlogDataFormInput from '../../components/Inputs/blogDataFormInput';
import BlogButton from '../../components/APIButtons/blog';

import FeaturedDataFormInput from '../../components/Inputs/featuredDataFormInput';
import FeaturedButton from '../../components/APIButtons/featured';

import Featured from './Featured'
import './style.css';

const Blog = () => {
  const loggedInContext = (useContext(LoginStatusContext));
  const { blogData, blogDataForm, appendInput } = useContext(BlogContext);
  const { featuredData } = useContext(FeaturedContext);
  const [currentPage, setCurrentPage] = useState(0);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [editBtn, setEditBtn] = useState({ shown: false })
  const [toggleClass, setToggleClass] = useState({ edit: false, render: <EditIcon />, renderAddPost: <AddIcon /> });
  const [addPost, setAddPost] = useState({ shown: false, renderAddPost: <AddIcon /> })
  const loggedIn = loggedInContext.loginState

  // Get current posts for pagination
  const indexOfLastPost = (currentPage * postsPerPage) + (postsPerPage);
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogData.array.slice(indexOfFirstPost, indexOfLastPost);
  // const loggedIn = true;

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPostsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(0);
  };

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

  return (
    <div className="blog-page blog-page-animation" style={{ height: '100%' }}>
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
          <div>
            <div>
              <h1>Create New Post</h1>
              <BlogDataFormInput path="title" />
              <BlogDataFormInput path="author" />
              <BlogDataFormInput path="description" />
              <BlogDataFormInput path="img_src" />

              {blogDataForm.post.body.map((input, i) =>
                <div key={i} style={{ padding:"35px 0", borderBottom:"1px dashed black" }}>
                  <BlogButton.ReorderForm direction={"Up"} sectionIndex={i} />
                  <BlogDataFormInput path={"body." + i + ".type"} inputType="blogBody" className="blog-form-textarea" />
                  <BlogDataFormInput className="full-width blog-form-textarea" path={"body." + i + ".data"} inputType="textarea" />
                  <BlogButton.ReorderForm direction={"Down"} sectionIndex={i} />
                  <BlogButton.DeleteBlogBodyForm sectionIndex={i} />
                </div>)}
              <button className="green-btn add-input-btn" onClick={() => appendInput()}>
                +Add Input
              </button>
                <BlogButton.Submit />
            </div>
            <h1>Create Featured Post</h1>
            <FeaturedDataFormInput path="name" />
            <FeaturedDataFormInput path="img_src" />
            <FeaturedDataFormInput path="job" />
            <FeaturedDataFormInput path="place" />
            <FeaturedDataFormInput className="full-width full-height" path="description" />
            <FeaturedDataFormInput className="full-width full-height" path="body" inputType="textarea" />
            <FeaturedDataFormInput path="external_link" />
            <FeaturedButton.Submit />
          </div>
        </div>
      ) : null}

      <Grid container spacing={0} justify="space-between" >
        <Grid item xs={12} sm={4} md={3} className="featured-container">
          <div className="featured">
            <div className="blog-header">
              <h2 className="featured-header">Featured People and Events</h2>
            </div>
            {featuredData.array.map((featured, index) => (
              <Featured
                index={index}
                featured={featured}
                loggedIn={loggedIn}
                edit={toggleClass.edit} />
            )
            )}
          </div>
        </Grid>
        <Grid item xs={12} sm={8} md={9}>
          <div className="post-container">
          {currentPosts.map((currentPosts, index) => (
            <Post
              key={currentPosts._id}
              index={index}
              loggedIn={loggedIn}
              edit={toggleClass.edit}
              posts={currentPosts}
              toggleClass={toggleClass.render}
              toggleEditFunction={toggleEditBtn} />
          )
          )}
          </div>

          <TablePagination
            component="div"
            count={blogData.array.length}
            page={currentPage}
            onChangePage={handleChangePage}
            rowsPerPage={postsPerPage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            style={{ margin: "50px 0" }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Blog