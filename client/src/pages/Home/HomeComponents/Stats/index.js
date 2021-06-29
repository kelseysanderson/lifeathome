import React, { useContext } from "react";
import { SiteContext } from '../../../../Context/SiteContext';
import { Box, Grid } from '@material-ui/core';
import StatsCircle from './StatsCircle'
import './style.css';

const Stats = (props) => {
    const siteData = useContext(SiteContext);
    const homePageData = siteData.homePage

    return (
        <div className="stats-page">
            <Box display="flex" flexDirection="row">
                <Grid container justify="center" spacing={4}>
                    <Grid item xs={12} sm={6} md={4} >
                        <StatsCircle key={homePageData.stat_1_title} statTitle={homePageData.stat_1_title} statBody={homePageData.stat_1_body} statLinkButton={homePageData.stat_1_button_text} statLink={homePageData.stat_1_link} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} >
                        <StatsCircle key={homePageData.stat_2_title} statTitle={homePageData.stat_2_title} statBody={homePageData.stat_2_body} statLinkButton={homePageData.stat_2_button_text} statLink={homePageData.stat_2_link} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} >
                        <StatsCircle key={homePageData.stat_3_title} statTitle={homePageData.stat_3_title} statBody={homePageData.stat_3_body} statLinkButton={homePageData.stat_3_button_text} statLink={homePageData.stat_3_link} />
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Stats;