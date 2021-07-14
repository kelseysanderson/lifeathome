import React, { useContext } from "react";
import { SiteContext } from '../../../Context/SiteContext';
import emailjs from 'emailjs-com';
import './style.css';

function ContactUs() {
  const { siteData } = useContext(SiteContext);

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_hh3450z', 'template_hj71q8i', e.target, 'user_R7Y4Ik83btn0p1ThkPSTV')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  }

  return (
    <>
      <form className="contact-form" onSubmit={sendEmail}>
        <div className="name-email-row">
          <label >Email To:</label>
          <p>{siteData.siteData.contact.email}</p>
        </div>
        <div className="name-email-row">
          <label >Name:</label>
          <input className="name-email" type="text" name="name" />
        </div>
        <div className="name-email-row">
          <label>Email: </label>
          <input className="name-email" type="email" name="email" />
        </div>
        <div className="name-email-row">
          <label>Message: </label>
          <textarea className="name-email" name="message" />
        </div>
        <input className="contact-button" type="submit" value="Send" />
      </form>
    </>
  );
}

export default ContactUs;