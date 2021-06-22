import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Grid, Box } from '@material-ui/core';
import CommentSection from '../../components/CommentSection';
import API from '../../utils/API'
import './style.css';

const BlogPost = (props) => {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(false);
    const { id } = useParams()

    useEffect(() => {
        fetchPost()
    }, []);

    const fetchPost = async () => {
        setLoading(true);
        const res = await API.getPost(id);
        console.log(res.data)
        setPost(res.data);
        setLoading(false);
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
                        <p>author?</p>
                        <p>{post.date_posted}</p>
                    </div>
                    <p className="blog-paragraphs" >{post.body} </p>
                    <CommentSection key={post._id} postId={post._id} postComments={post.comments} fetchPost={fetchPost}/>
                </Box>
            </Grid>
            

        </div>

    )

}

export default BlogPost