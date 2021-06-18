import React from 'react';
import { Grid } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import smarthome from '../../../../assets/smarthome.png';
import './style.css';

const BannerItems = (props) => {
    return (
        <>
            <Grid style={{ border: "none" }} item xs={12} sm={6}>
                <h2 className="title-text banner-title">{props.title}</h2>
                <img className="banner-image" src={smarthome} alt="smarthome with mobile device"></img>
                <p className="banner-description">{props.description}</p>
                <NavLink exact to="/services"><button className="orange-btn">{props.button}</button></NavLink>
            </Grid >
        </>
    )
}

export default BannerItems