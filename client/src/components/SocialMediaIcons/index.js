import React from 'react';
import twitter from '../../assets/social-media/twitter.png';
import facebook from '../../assets/social-media/facebook.png';
import instagram from '../../assets/social-media/instagram.png';
import './style.css';

const SocialMediaIcons = () => {
  return (
    <div className="social-media">
      <a href='#' target="_blank" rel="noreferrer"><img className="social-media-icons" src={twitter} alt="Twitter Icon" /></a>
      <a href='#' rel="noreferrer"><img className="social-media-icons" src={facebook} alt="Gmail Icon" /></a>
      <a href='#' target="_blank" rel="noreferrer"><img className="social-media-icons" src={instagram} alt="Instagram Icon" /></a>
    </div>
  )
}

export default SocialMediaIcons