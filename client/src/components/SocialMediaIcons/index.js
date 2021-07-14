/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import './style.css';

const SocialMediaIcons = () => {
  return (
    <div >
      <a href="https://www.facebook.com/lifesathome/" target="_blank" rel="noreferrer">
        <FacebookIcon style={{ color: 'white', fontSize: "40px", margin: '0 15px' }} />
      </a>
    </div>
  )
}

export default SocialMediaIcons