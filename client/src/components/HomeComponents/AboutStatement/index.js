import React from 'react';
import './style.css';
import { Grid } from '@material-ui/core';

const AboutStatement = (props) => {
    return (
    <Grid container justify="center" alignItems="center" spacing={8}>
        <Grid item xs={12} sm={6}>
        <p className="about-text">
            We are a consulting agency, blog and resource for modernizing living spaces. We help in the planning process of making spaces more accessible to individuals with non standard physical, emotional, and stimulus needs.
            In addition to accessibility, we also focus on environmental impact and sustainability.
        </p>
        </Grid>
    </Grid>
    )
}

export default AboutStatement