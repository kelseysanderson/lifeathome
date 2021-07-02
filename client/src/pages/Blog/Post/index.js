import React from 'react';
import moment from 'moment';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BlogDataInput from '../../../components/Inputs/blogDataInput';
import BlogDataDelete from '../../../components/DeleteButtons/blogDataDelete';
import { NavLink } from 'react-router-dom';
import './style.scss';

const Post = ({ posts, index, loggedIn, loading, toggleClass, toggleEditFunction, edit }) => {

  if (loading) {
    return <h2>Loading...</h2>;
  }
  console.log(index)

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
              {loggedIn && edit === true ? (
                <>
                  <BlogDataInput {...posts} key={posts.title} index={index} className="admin-blog-input" path="title" />
                  <BlogDataInput {...posts} key={posts.author} index={index} className="admin-blog-input" path="author" />
                  <BlogDataInput {...posts} key={posts.description} index={index} className="admin-blog-input" path="description" />
                  <div className="likes-container">
                    <NavLink exact to={{ pathname: `/blog/${posts._id}`, aboutProps: { toggleEditFunction: toggleEditFunction, toggleClass: toggleClass } }}>
                      <button className="btn btn--with-icon"><i className="btn-icon fa fa-long-arrow-right"></i>READ MORE</button>
                    </NavLink>
                    <div>
                      <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                      </IconButton>
                      <BlogDataDelete postId={posts._id} />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h5>{posts.title}</h5>
                  <p className="icon-link mr-3"><i className="fa fa-pencil-square-o"></i> {posts.author}</p>
                  <p>{posts.description}</p>
                  <div className="likes-container">
                    <NavLink exact to={{ pathname: `/blog/${posts._id}`, aboutProps: { toggleEditFunction: toggleEditFunction, toggleClass: toggleClass } }}>
                      <button className="btn btn--with-icon"><i className="btn-icon fa fa-long-arrow-right"></i>READ MORE</button>
                    </NavLink>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                  </div>
                </>
              )}
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            </div>
          </article>
        </div>
        <section className="detail-page">
          <div className="container mt-5">
          </div>
        </section>
      </div>
    </>

  );
};

export default Post