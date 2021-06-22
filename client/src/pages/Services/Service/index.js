import React, { useContext } from 'react';
import { SiteContext } from '../../../Context/SiteContext';
import { Grid } from '@material-ui/core';
import smarthome from '../../../assets/smarthome.png';
import './style.css'

const Service = (props) => {
    const siteData = useContext(SiteContext);
    const servicesPageData = siteData.servicesPage;
    return (
        <>
            <div className="dropdown">
                <button className="dropbtn">Services</button>
                <div className="dropdown-content">
                    <a href="#smarthome">Smart Home </a>
                    <a href="#">Accessibility </a>
                    <a href="#">Sustainability </a>
                </div>
            </div>
            <div className="container service-container" id="smarthome">
                <Grid style={{ border: "none" }} item xs={9} md={6}>
                    <img className="service-image" src={smarthome} alt="smarthome with phone app"></img>
                </Grid>

                <Grid style={{ border: "none" }} item xs={9} md={6}>
                    <div className="service-text">
                        <h1>{servicesPageData.title}</h1>
                        <p> {servicesPageData.body}</p>
                        <button className="green-btn">{servicesPageData.link_button_text}</button>
                    </div>
                </Grid>
            </div>
        </>
    )

}

export default Service