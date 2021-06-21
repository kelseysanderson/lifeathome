import React, {useContext} from 'react';
import { SiteContext } from '../../../Context/SiteContext';
import './style.css';
import { Grid } from '@material-ui/core';

const AboutStatement = (props) => {
    const siteData = useContext(SiteContext);
    const homePageData = siteData.homePage;
    return (
        <Grid container justify="center" alignItems="center" spacing={8}>
            <Grid item xs={12} sm={6}>
                <p className="about-text">
                   {homePageData.about_statement_body}
                </p>
            </Grid>
        </Grid>
    )
}

export default AboutStatement