import React, { useState, useEffect } from 'react';
import API from '../../utils/API'
import Post from './Post';
import SearchAppBar from './SearchAppBar';
import TablePagination from '@material-ui/core/TablePagination';
import { Grid, Box } from '@material-ui/core';
import './style.css';

const Blog = (props) => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [postsPerPage, setPostsPerPage] = React.useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await API.getPosts();
      setPosts(res.data);
      setLoading(false);
    }
    fetchPosts();
  }, []);

  function goToPost(id) {
      console.log("CLICK.")
      console.log("IDDD", id)
      window.location.replace('/blog/' + id);
  }

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPostsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(0);
  };


  // Get current posts
  const indexOfLastPost = (currentPage + 1) * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  

  if (loading ) {
    return <h2>Loading...</h2>;
  }
  return (

    <Grid container direction="column" spacing={3}>
      <Box display="flex" justifyContent="flex-end" alignItems="center">

        <Grid item container direction="column" xs={4} >
          <Grid item xs>
            <SearchAppBar posts={posts} />
          </Grid>
        </Grid>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Grid item xs={11}>
          <Post currentPosts={currentPosts} posts={posts} loading={loading} handlePostClick={goToPost}/>
          <TablePagination
            component="div"
            count={posts.length}
            page={currentPage}
            onChangePage={handleChangePage}
            rowsPerPage={postsPerPage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          /> 
        </Grid>
      </Box>

    </Grid>
  );
}

export default Blog