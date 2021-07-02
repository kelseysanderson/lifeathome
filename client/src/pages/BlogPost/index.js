import React, { useState, useEffect, useContext } from 'react';
import { BlogContext } from '../../Context/BlogContext';
import { useParams } from "react-router-dom";
import { Grid, Box } from '@material-ui/core';
import CommentSection from './CommentSection';
import moment from 'moment'
import API from '../../utils/API';
import './style.css';

const BlogPost = () => {
  const { blogData } = useContext(BlogContext);
  const [post, setPost] = useState([]);
  const { id } = useParams();

  console.log(blogData)
  useEffect(() => {
    fetchPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchPost = async () => {
    // setLoading(true);
    const res = await API.getPost(id);
    setPost(res.data);
    // setLoading(false);
  }

  return (
    <div>
      <Grid container direction="column" spacing={3}>
        <Box display="flex" flexDirection="column" justifyContent="flex-end" alignItems="center" style={{ marginBottom: "100px" }}>
          <h1 className="single-blog-header">{post.title}</h1>
          <div className="image-container">
            <img className="single-post-image" src={post.img_src} alt=""></img>
          </div>
          <div>
            <p>{post.author}</p>
            <p>{moment(post.date_posted).format("LL")}</p>
          </div>
          <p className="blog-paragraphs" >{post.body} </p>
          <CommentSection key={post._id} postId={post._id} postComments={post.comments} fetchPost={fetchPost} />
        </Box>
      </Grid>
    </div>
  )
}

export default BlogPost;