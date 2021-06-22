import React from 'react';
import SocialMediaIcons from '../../components/SocialMediaIcons';
import ContactForm from './ContactForm';
import { InlineWidget } from "react-calendly";

import './style.css'

const Contact = (props) => {
    return (
        <>
            <h1 className="contact-header">Contact Us</h1>

            <div className="contact-page">
                <div className="contact-page">
                    <div className="contact-container">
                        <h3 className="message-header">Send a Message:</h3>
                        <SocialMediaIcons />
                        <ContactForm />
                    </div>
                    <div className="calendly contact-container" >
                        <h3 className="message-header">Schedule a Consultation:</h3>
                        <InlineWidget styles={{ height: '90%', width: '90%' }} url="https://calendly.com/kelseymonica" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact