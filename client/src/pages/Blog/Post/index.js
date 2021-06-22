import React from 'react';
import { Grid } from '@material-ui/core';

import './style.css'

const Post = ({ posts, loading, handlePostClick}) => {


    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <div>
            {posts.map(post => (
                <Grid key={post._id} container direction="row" spacing={3} alignItems="center" style={{ borderBottom: "1px solid grey", marginBottom: "20px", width: "70%", marginLeft: "15%" }}>
                    <Grid item container direction="column" xs={6} spacing={2}>
                        <Grid item xs>
                            <img className="post-image" src={post.img_src} alt="smarthome with phone app"></img>
                        </Grid>
                    </Grid>
                    <Grid style={{ border: "none" }} item xs={6}>
                        <div className="post-text">
                            <h2>{post.title}</h2>
                            <p>{post.description}</p>
                            <button className="green-btn post-btn" onClick={() => handlePostClick(post._id)}>See Full Post</button>
                        </div>
                        <p id="post-subtext">{post.date_posted}</p>
                    </Grid>
                </Grid>
            ))}
        </div>

    );
};

export default Post