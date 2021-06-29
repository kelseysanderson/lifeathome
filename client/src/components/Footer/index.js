import React, {useContext} from 'react';
import { SiteContext } from '../../Context/SiteContext';
import SocialMediaIcons from '../SocialMediaIcons'
import './style.css';

const Footer = () => {
  const siteData = useContext(SiteContext);

  return (
    <footer>
      <section className="container">
        <div className="footer-contact">
          <p>{siteData.siteData.contact_name}</p>
          <p>{siteData.siteData.contact_location}</p>
          <p>{siteData.siteData.contact_email}</p>
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