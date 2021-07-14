import React, { useContext } from 'react';
import { SiteContext } from '../../Context/SiteContext';
import SocialMediaIcons from '../SocialMediaIcons';
import { NavLink } from 'react-router-dom';
import './style.css';

const Footer = (props) => {
  const { siteData } = useContext(SiteContext);

  return (
    <footer>
      <section className="container">
        <div className="footer-contact">
          <p className="footer-text">{siteData.siteData.contact.name ? siteData.siteData.contact.name : ""}</p>
          <p className="footer-text">{siteData.siteData.contact.location ? siteData.siteData.contact.location : ""}</p>
          <p className="footer-text">{siteData.siteData.contact.email ? siteData.siteData.contact.email : ""}</p>
        </div>
        <div>
          <NavLink exact to="/"  className="footer-copyright"> <p > {`\u00a9 ${siteData.siteData.company_name} 2021`}</p></NavLink>
        </div>
        <SocialMediaIcons />
      </section>
    </footer>
  )
}

export default Footer