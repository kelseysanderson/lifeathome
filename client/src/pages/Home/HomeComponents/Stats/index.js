import React, { useContext } from "react";
import { SiteContext } from '../../../../Context/SiteContext';
import { Box, Grid } from '@material-ui/core';
import StatsCircle from './StatsCircle'
import './style.css';

const Stats = (props) => {
    const {siteData} = useContext(SiteContext);
    const homePageData = siteData.homePage

    return (
        <div className="stats-page">
            <Box display="flex" flexDirection="row">
            <Grid container  justify="center"  spacing={4}>

                <Grid item xs={12} sm={6} md={4} >

                <StatsCircle key={homePageData.stat_1.title} statTitle={homePageData.stat_1.title} statBody={homePageData.stat_1.body} statLinkButton={homePageData.stat_1.button_text} statLink={homePageData.stat_1.link} />
                </Grid>
                <Grid item xs={12} sm={6} md={4} >

                <StatsCircle key={homePageData.stat_2.title} statTitle={homePageData.stat_2.title} statBody={homePageData.stat_2.body} statLinkButton={homePageData.stat_2.button_text} statLink={homePageData.stat_2.link} />
                </Grid>
                <Grid item xs={12} sm={6} md={4} >

                <StatsCircle key={homePageData.stat_3.title} statTitle={homePageData.stat_3.title} statBody={homePageData.stat_3.body} statLinkButton={homePageData.stat_3.button_text} statLink={homePageData.stat_3.link} />
                </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Stats