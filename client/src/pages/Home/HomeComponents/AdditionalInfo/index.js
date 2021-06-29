import React, { useContext } from "react";
import { SiteContext } from '../../../../Context/SiteContext';
import { NavLink } from 'react-router-dom';
import { Grid, Box } from '@material-ui/core';
import './style.css';

const AdditionalInfo = (props) => {
    const {siteData} = useContext(SiteContext);
    const homePageData = siteData.homePage;
    return (
        <section className="additional-info">
            <Box display="flex" justifyContent="space-evenly" alignItems="center">
                <Grid item xs={4}>
                    <p>{homePageData.additional_box_1.body}.</p>
                    <div className="learn-more-btn">
                    <NavLink exact to={homePageData.additional_box_1.link}><button className="green-btn">{homePageData.additional_box_1.link_button_text}</button></NavLink>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <p className="top-bottom-border mission-text">{homePageData.additional_box_2.body}</p>
                </Grid>
            </Box>
        </section>
    )
}

export default AdditionalInfo