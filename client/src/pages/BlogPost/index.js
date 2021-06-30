import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Grid, Box } from '@material-ui/core';
import CommentSection from './CommentSection';
import moment from 'moment'
import API from '../../utils/API';
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import './style.css';

const BlogPost = () => {
    const [post, setPost] = useState([]);
    const [editBtn, setEditBtn] = useState({ shown: false })
    const [toggleClass, setToggleClass] = useState({ edit: false, render: <EditIcon className="icon" />});
    const { id } = useParams();
    const loggedIn = true;

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
    console.log(toggleClass.edit)

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

    return (
        <div>
            <div>
                {loggedIn ? (
                    <IconButton onClick={toggleEditBtn}>
                        {toggleClass.render}
                    </IconButton>
                ) : null}
                {loggedIn && toggleClass.edit === true ? (
                    <IconButton className="edit-btn">
                        <DeleteIcon className="icon" />
                    </IconButton>
                ) : null}
            </div>

            <Grid container direction="column" spacing={3}>
                <Box display="flex" flexDirection="column" justifyContent="flex-end" alignItems="center" style={{ marginBottom: "100px" }}>
                    <h1 className="single-blog-header">{post.title}</h1>
                    <div className="image-container">
                        <img className="single-post-image" src={post.img_src} alt=""></img>
                    </div>
                    <div>
                        <p>Mason Marshall</p>
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