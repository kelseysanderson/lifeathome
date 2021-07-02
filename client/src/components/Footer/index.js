import React, {useContext} from 'react';
import { SiteContext } from '../../Context/SiteContext';
import SocialMediaIcons from '../SocialMediaIcons'
import './style.css';

const Footer = (props) => {
  const {siteData} = useContext(SiteContext);
  return (
    <footer>
      <section className="container">
        <div className="footer-contact">
          <p>{siteData.siteData.contact.name ? siteData.siteData.contact.name : ""}</p>
          <p>{siteData.siteData.contact.location ? siteData.siteData.contact.location :""}</p>
          <p>{siteData.siteData.contact.email ? siteData.siteData.contact.email : ""}</p>
        </div>
        <SocialMediaIcons/>
        <div>
            <p className="footer-copyright" > {"\u00a9 Life at Home Consulting 2021"}</p>
        </div>
      </section>
    </footer>
  )
}

export default Footer