import React, { useState, useEffect, useContext } from 'react';
import { BlogContext } from '../../Context/BlogContext';
import { FeaturedContext } from '../../Context/FeaturedContext';
import Post from './Post';
import TablePagination from '@material-ui/core/TablePagination';
import { Grid, Container } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import EditIcon from '@material-ui/icons/Edit';
import BlogDataFormInput from '../../components/Inputs/blogDataFormInput';
import Featured from './Featured'
import './style.css';

const Blog = () => {
  const { blogData } = useContext(BlogContext);
  const { featuredData } = useContext(FeaturedContext);
  const [currentPage, setCurrentPage] = useState(0);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [editBtn, setEditBtn] = useState({ shown: false })
  const [toggleClass, setToggleClass] = useState({ edit: false, render: <EditIcon />, renderAddPost: <AddIcon /> });
  const [addPost, setAddPost] = useState({ shown: false, renderAddPost: <AddIcon /> })

  console.log("DATAAA", featuredData)
  // Get current posts for pagination
  const indexOfLastPost = (currentPage * postsPerPage) + (postsPerPage);
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogData.array.slice(indexOfFirstPost, indexOfLastPost);
  const loggedIn = true;

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
    <div className="blog-page" style={{height:'100%'}}>
      {loggedIn ? (
        <>
          <IconButton onClick={toggleEditBtn}>
            {toggleClass.render}
          </IconButton>
          <IconButton onClick={handleAddPost}>
            {addPost.renderAddPost}
          </IconButton>
        </>
      ) : null}

      {addPost.shown === true ? (
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: "15%", marginRight: "15%", justifyContent: "center" }}>
          <h1>Create New Post</h1>
          <BlogDataFormInput path="title" />
          <BlogDataFormInput path="author" />
          <BlogDataFormInput path="description" />
          <BlogDataFormInput path="img_src" />
          <BlogDataFormInput className="full-width full-height" path="body" inputType="textarea" />
        </div>
      ) : null}

      <Grid container spacing={0} justify="space-between" >
        <Grid item md={3} style={{backgroundColor:'#2E343C', borderRadius: '0 10px 10px 0', height:'100%', marginTop: '25px'}}>
          <div className="sidebar">
            <div className="blog-header">
              <h2 className="sidebar-header">Featured People and Events</h2>
            </div>
            {featuredData.array.map((featured, index) => (
              <Featured
                index={index}
                featured={featured}
                // id={featured._id}
                // name={featured.name}
                // job={featured.job}
                // place={featured.place}
                // description={featured.description}
                // body={featured.body}
                // img_src={featured.img_src}
                // link={featured.external_link}
                loggedIn={loggedIn} 
                edit={toggleClass.edit} />
            )
            )}
          </div>
        </Grid>


        <Grid item sm={12} md={9}>
          {currentPosts.map((currentPosts, index) => (
            <Post key={currentPosts._id} index={index} loggedIn={loggedIn} edit={toggleClass.edit} posts={currentPosts} loggedIn={loggedIn} toggleClass={toggleClass.render} toggleEditFunction={toggleEditBtn} />
          )
          )}
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