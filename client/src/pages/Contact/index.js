import React, { useState } from 'react';
import SocialMediaIcons from '../../components/SocialMediaIcons';
import { Grid } from '@material-ui/core';
import ContactForm from './ContactForm';
import { InlineWidget } from "react-calendly";
import './style.css'

const Contact = (props) => {
    return (
        <div className="contact-page">
            <Grid container spacing={4}>
                <Grid item sm={12} >
                    <h1 className="contact-header">Contact Us</h1>
                </Grid>
                <Grid item xs={12} sm={7} md={6} >
                    <div className="contact-container">
                        <h3 className="message-header">Send a Message:</h3>
                        <SocialMediaIcons />
                        <ContactForm />
                    </div>
                </Grid>
                <Grid item xs={12} sm={5} md={6}>
                    <div className="calendly contact-container" >
                        <h3 className="message-header">Schedule a Consultation:</h3>
                        <InlineWidget styles={{ height: '90%', width: '90%' }} url="https://calendly.com/kelseymonica" />
                    </div>
                </Grid>
            </Grid>
        </div>
    )

}

export default Contact;