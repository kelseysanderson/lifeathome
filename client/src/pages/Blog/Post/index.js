import React from 'react';
import moment from 'moment';
// import {Grid} from '@material-ui/core'
import './style.scss';

const Post = ({ posts, loading, handlePostClick }) => {

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
        <div>
          <div className="container mt-5">
            <article className="blog-card">
              <div className="blog-card__background">
                <div className="card__background--wrapper">
                  <div className="card__background--main" style={{ backgroundImage: `url(${posts.img_src})`, width: "100%" }}>
                    <div className="card__background--layer"></div>
                  </div>
                </div>
              </div>
              <div className="blog-card__head">
                <span className="date__box">
                  <span className="date__day">{moment(posts.date_posted).format("MMMM")}</span>
                  <span className="date__month">{moment(posts.date_posted).format("DD YYYY")}</span>
                </span>
              </div>
              <div className="blog-card__info">
                <h5>{posts.title}</h5>
               
                  <p className="icon-link mr-3"><i className="fa fa-pencil-square-o"></i> Mason Marshall</p>
                
                <p>{posts.description}</p>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a onClick={() => handlePostClick(posts._id)} className="btn btn--with-icon"><i className="btn-icon fa fa-long-arrow-right"></i>READ MORE</a>
              </div>
            </article>
          </div>
          <section className="detail-page">
            <div className="container mt-5">
            </div>
          </section>
        </div>
{/* 
        <Grid key={posts._id} container direction="row" spacing={3} alignItems="center" style={{ borderBottom: "1px solid grey", marginBottom: "20px", width: "70%", marginLeft: "15%" }}>
            <Grid item container direction="column" xs={6} spacing={2}>
                <Grid item xs>
                    <img className="post-image" src={posts.img_src} alt="smarthome with phone app"></img>
                </Grid>
            </Grid>
            <Grid style={{ border: "none" }} item xs={6}>
                <div className="s-text">
                    <h2>{posts.title}</h2>
                    <p>{posts.description}</p>
                    <button className="green-btn post-btn" onClick={() => handlePostClick(posts._id)}>See Full Post</button>
                </div>
                <p id="post-subtext">{moment(posts.date_posted).format("LL")}</p>
            </Grid>
        </Grid> */}
    </>

  );
};

export default Post