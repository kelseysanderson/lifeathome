import React from 'react';
import { Grid } from '@material-ui/core';
import ContactForm from './ContactForm';
import { InlineWidget } from "react-calendly";
import MessengerCustomerChat from 'react-messenger-customer-chat';
import './style.css'

const Contact = (props) => {
  const facebookPageId= process.env.REACT_APP_FACEBOOK_PAGE_ID

  return (
    <div className="contact-page blog-page-animation">
      <MessengerCustomerChat
        pageId={facebookPageId}
      />
      <div class="fb-customerchat"
        attribution="install_email"
        attribution_version="biz_inbox"
        page_id="102251408806392">
      </div>
      <Grid container spacing={4}>
        <Grid item sm={12} >
          <h1 className="contact-header">Contact Us</h1>
          <hr className="services-underline"></hr>
        </Grid>
        <Grid item xs={12} sm={6} md={6} >
          <div className="contact-container">
            <h3 className="message-header">Send a Message:</h3>
            <ContactForm />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <div className="calendly contact-container" >
            <h3 className="message-header">Schedule a Consultation:</h3>
            <InlineWidget styles={{ height: '90%', width: '90%' }} url="https://calendly.com/lifeathome" />
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Contact;