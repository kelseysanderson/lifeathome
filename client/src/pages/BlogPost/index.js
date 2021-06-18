import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import smarthome from '../../assets/smarthome.png';
import { Grid, Box } from '@material-ui/core';
import API from '../../utils/API'
import './style.css';

const BlogPost = (props) => {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(false);
    const { id } = useParams()
    const postId = id

    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true);
            const res = await API.getPost(id);
            setPost(res.data);
            setLoading(false);
        }
        fetchPost()
    }, [id]);

    console.log(post)

    return (
        <div>
                    <Grid container direction="column" spacing={3}>
            <Box display="flex" flexDirection="column" justifyContent="flex-end" alignItems="center" style={{marginBottom: "100px"}}>
                <h1 className="single-blog-title">{post.title}</h1>
                <div className="image-container">
                <img className="single-post-image" src={post.img_src} alt=""></img>

                </div>
                <div>
                    <p>author?</p>
                    <p>{post.date_posted}</p>
                </div>
                <p className="blog-paragraphs" style={{width:"70%"}}>{post.body} </p>
            </Box>
        </Grid>
        {/* <Comments /> */}

        </div>

    )

}

export default BlogPost