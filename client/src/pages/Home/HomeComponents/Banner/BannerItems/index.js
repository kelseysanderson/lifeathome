import React from 'react';
import { Grid } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import './style.css';

const BannerItems = (props) => {
    return (
        <Grid item style={{ border: "none" }} item xs={12} sm={6}>
            <div>
                <h2 className="title-text banner-title">{props.title}</h2>
                <p className="banner-description">{props.description}</p>
                <NavLink exact to={props.nav}><button className="orange-btn banner-btn">{props.button}</button></NavLink>
            </div>
        </Grid >
    )
}

export default BannerItems