import React, { useContext } from "react";
import { SiteContext } from '../../../Context/SiteContext';
import { Grid, Box } from '@material-ui/core';
import './style.css';

const AdditionalInfo = (props) => {
    const siteData = useContext(SiteContext);
    const homePageData = siteData.homePage;
    return (
        <section className="additional-info">
            <Box display="flex" justifyContent="space-evenly" alignItems="center">
                <Grid item xs={4}>
                    <p>{homePageData.additional_box_1_body}.</p>
                    <div className="learn-more-btn">
                        <button className="green-btn">{homePageData.additional_box_1_link_button_text}</button>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <p className="top-bottom-border mission-text">{homePageData.additional_box_2_body}</p>
                </Grid>
            </Box>
        </section>
    )
}

export default AdditionalInfo