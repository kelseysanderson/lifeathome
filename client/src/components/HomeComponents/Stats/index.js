import React, { useContext } from "react";
import { SiteContext } from '../../../Context/SiteContext';
import StatsCircle from './StatsCircle'
import './style.css';

const Stats = (props) => {
    const siteData = useContext(SiteContext);
    const homePageData = siteData.homePage

    return (
        <div className="stats-page">
            {/* {stats.map(stats => ( */}
                <StatsCircle key={homePageData.stat_1_title} statTitle={homePageData.stat_1_title} statBody={homePageData.stat_1_body} statLinkButton={homePageData.stat_1_button_text} statLink={homePageData.stat_1_link} />
                <StatsCircle key={homePageData.stat_2_title} statTitle={homePageData.stat_2_title} statBody={homePageData.stat_2_body} statLinkButton={homePageData.stat_2_button_text} statLink={homePageData.stat_2_link} />
                <StatsCircle key={homePageData.stat_3_title} statTitle={homePageData.stat_3_title} statBody={homePageData.stat_3_body} statLinkButton={homePageData.stat_3_button_text} statLink={homePageData.stat_3_link} />
             {/* ))} */}
        </div>
    )
}

export default Stats