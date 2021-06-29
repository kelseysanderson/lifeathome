import React from 'react';
import { Grid } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
// import smarthome from '../../../../../assets/smarthome.png';
import './style.css';

const BannerItems = (props) => {
    console.log(props)
    return (
        <>
            <Grid item style={{ border: "none" }} xs={12} sm={6}>
                <div>
                    <h2 className="title-text banner-title">{props.title}</h2>
                    {/* <img className="banner-image" src={smarthome} alt="smarthome with mobile device"></img> */}
                    <p className="banner-description">{props.description}</p>
                    <NavLink exact to={props.nav}><button className="orange-btn banner-btn">{props.button}</button></NavLink>
                </div>
            </Grid >
        </>
    )
}

export default BannerItems