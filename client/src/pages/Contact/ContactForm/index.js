import React, { useContext } from "react";
import { SiteContext } from '../../../Context/SiteContext';
import emailjs from 'emailjs-com';
import './style.css';

function ContactUs() {
  const { siteData } = useContext(SiteContext);
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATEID;
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICEID;
  const userId = process.env.REACT_APP_EMAILJS_USERID

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm(serviceId, templateId, e.target, userId)
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