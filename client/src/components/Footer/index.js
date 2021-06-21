import React, {useContext} from 'react';
import { SiteContext } from '../../Context/SiteContext';
import SocialMediaIcons from '../SocialMediaIcons'
import './style.css';

const Footer = (props) => {
  const siteData = useContext(SiteContext);
  return (
    <footer>
      {/* <div className="curved-div upper">
        <svg id="visual" viewBox="0 0 2000 100" width="2000" height="100" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
          <path style={{ border: "none" }} d="M0 68L47.7 70.5C95.3 73 190.7 78 285.8 80C381 82 476 81 571.2 77.8C666.3 74.7 761.7 69.3 857 69.3C952.3 69.3 1047.7 74.7 1143 75.8C1238.3 77 1333.7 74 1428.8 74.2C1524 74.3 1619 77.7 1714.2 79.2C1809.3 80.7 1904.7 80.3 1952.3 80.2L2000 80L2000 101L1952.3 101C1904.7 101 1809.3 101 1714.2 101C1619 101 1524 101 1428.8 101C1333.7 101 1238.3 101 1143 101C1047.7 101 952.3 101 857 101C761.7 101 666.3 101 571.2 101C476 101 381 101 285.8 101C190.7 101 95.3 101 47.7 101L0 101Z" fill="#2E343C" strokeLinecap="round" strokeLinejoin="miter"></path>
        </svg>
      </div> */}
      <section className="container">
        <div className="footer-contact">
          <p>{siteData.siteData.contact_name}</p>
          <p>{siteData.siteData.contact_location}</p>
          <p>{siteData.siteData.contact_email}</p>
        </div>
        <div>
            <p className="footer-copyright" > {"\u00a9 Life at Home Consulting 2021"}</p>
        </div>
        <SocialMediaIcons/>
      </section>
    </footer>
  )

}

export default Footer