import React from 'react';
import { Grid } from '@material-ui/core';
import ContactForm from './ContactForm';
import { InlineWidget } from "react-calendly";
import './style.css'
const Contact = (props) => {
  return (
    <div className="contact-page blog-page-animation">

      <Grid container spacing={4}>
        <Grid item sm={12} >
          <h1 className="contact-header">Contact Us</h1>
          <hr className="services-underline"></hr>
        </Grid>
        <Grid item xs={12} sm={6} md={7} lg={8}>
          <div className="calendly contact-container" id="calendar-box">
            <h3 className="message-header" style={{color:'black'}}>Schedule a Consultation:</h3>
            {/* <iframe src="https://www.youtube.com/embed/cWDJoK8zw58"></iframe> */}
            <InlineWidget styles={{ height: '95%', width: '98%' }} url="https://squareup.com/appointments/buyer/widget/lrbc9h0kzvmiw7/TSVB3N2KXEJN8" />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={5} lg={4} >
          <div className="contact-container">
            <h3 className="message-header">Send a Message:</h3>
            <ContactForm />
          </div>
        </Grid>



      </Grid>
    </div>
  )
}

export default Contact;