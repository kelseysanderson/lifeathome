import React, { useState, useEffect, useContext } from 'react';
import { BlogContext } from '../../Context/BlogContext';
import Post from './Post';
import TablePagination from '@material-ui/core/TablePagination';
import { Grid, Container } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import EditIcon from '@material-ui/icons/Edit';
import BlogDataFormInput from '../../components/Inputs/blogDataFormInput';
import CardComp from '../../components/CardComp'
import './style.css';

const Blog = () => {
  const { blogData } = useContext(BlogContext);
  const [currentPage, setCurrentPage] = useState(0);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [editBtn, setEditBtn] = useState({ shown: false })
  const [toggleClass, setToggleClass] = useState({ edit: false, render: <EditIcon />, renderAddPost: <AddIcon /> });
  const [addPost, setAddPost] = useState({ shown: false, renderAddPost: <AddIcon /> })

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
    <div className="blog-container">
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
          <BlogDataFormInput path="body" inputType="textarea" />
        </div>
      ) : null}

      <Container maxWidth="xl" style={{ marginTop: "30px", width: "100%" }}>
        <Grid container spacing={0} justify="space-between">
          <Grid item xs={12} sm={3} >
            <div className="sidebar">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <h1 className="sidebar-header">Cool People</h1>
              </div>
              <div className="sidebar-people">
                <CardComp name="Kelsey Sanderson" link="https://kelseysanderson.com" image="https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80" description="description" body="Vestibulum scelerisque justo eget justo luctus consequat. Maecenas lacus orci, scelerisque vitae odio in, tincidunt dictum urna. Aliquam sit amet ante in neque tempor euismod. Vestibulum eu mauris eget elit volutpat facilisis eget a arcu. Suspendisse at quam et lorem tempus viverra. Mauris vitae gravida elit. Aenean enim orci, vehicula non urna et, interdum varius ligula. Praesent vitae mi mauris. Aenean gravida aliquet tellus in aliquam. Quisque auctor sapien tempus nunc facilisis, sed imperdiet purus rhoncus. Nunc tincidunt lacus placerat, tincidunt dui quis, interdum nisl." />
                <CardComp />
              </div>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <h1 className="sidebar-header">Local Happenings</h1>
              </div>
              <div className="sidebar-people">
                <CardComp name="Kelsey Sanderson" link="https://kelseysanderson.com" image="https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80" description="description" body="Vestibulum scelerisque justo eget justo luctus consequat. Maecenas lacus orci, scelerisque vitae odio in, tincidunt dictum urna. Aliquam sit amet ante in neque tempor euismod. Vestibulum eu mauris eget elit volutpat facilisis eget a arcu. Suspendisse at quam et lorem tempus viverra. Mauris vitae gravida elit. Aenean enim orci, vehicula non urna et, interdum varius ligula. Praesent vitae mi mauris. Aenean gravida aliquet tellus in aliquam. Quisque auctor sapien tempus nunc facilisis, sed imperdiet purus rhoncus. Nunc tincidunt lacus placerat, tincidunt dui quis, interdum nisl." />
                <CardComp />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={8}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h1>Blog Posts</h1>
            </div>
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
      </Container>
    </div>
  );
}

export default Blog