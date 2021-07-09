import React from 'react';
import moment from 'moment';
import BlogDataInput from '../../../components/Inputs/blogDataInput';
import BlogDataDelete from '../../../components/DeleteButtons/blogDataDelete';
import { NavLink } from 'react-router-dom';
import './style.scss';

const Post = ({ posts, index, loggedIn, toggleClass, toggleEditFunction, edit }) => {

  return (
    <div className="blog-card">
      {loggedIn && edit === true ? (
        <>
          <div className="meta">
            <div className="photo" style={{ backgroundImage: `url(${posts.img_src})` }}></div>
            <ul className="details">
              <li className="author">{posts.author}</li>
              <li className="date">{moment(posts.date_posted).format("MMMM DD YYYY")}</li>
            </ul>
          </div>
          <div className="description">
            <BlogDataInput {...posts} index={index} className="admin-blog-input" path="title" />
            <BlogDataInput {...posts} index={index} className="admin-blog-input" path="author" />
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <BlogDataInput {...posts} index={index} className="admin-blog-input" path="description" />
              <BlogDataDelete postId={posts._id} />
            </div>
            <p className="read-more">
              <NavLink style={{ textDecoration: 'none', border: '1px solid #81a791', padding: '5px', borderRadius: '5px', textAlign: 'center', backgroundColor: '#AED3BE' }} exact to={{ pathname: `/blog/${index}`, aboutProps: { toggleEditFunction: toggleEditFunction, toggleClass: toggleClass } }}>
                Read Here
              </NavLink>
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="meta">
            <div className="photo" style={{ backgroundImage: `url(${posts.img_src})` }}></div>
            <ul className="details">
              <li className="author">{posts.author}</li>
              <li className="date">{moment(posts.date_posted).format("MMMM DD YYYY")}</li>
            </ul>
          </div>
          <div className="description">
            <h1>{posts.title}</h1>
            <h2>{posts.author}</h2>
            <p> {posts.description}</p>
            <p className="read-more">
              <NavLink style={{ textDecoration: 'none', border: '1px solid #81a791', padding: '5px', borderRadius: '5px', textAlign: 'center', backgroundColor: '#AED3BE' }} exact to={{ pathname: `/blog/${index}`, aboutProps: { toggleEditFunction: toggleEditFunction, toggleClass: toggleClass } }}>
                Read Here
              </NavLink>
            </p>
          </div>
        </>
      )}
    </div>
  )
};

export default Post