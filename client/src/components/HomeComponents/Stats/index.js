import React, { useContext } from "react";
import { SiteContext } from '../../../Context/SiteContext';
import StatsCircle from './StatsCircle'
import './style.css';

const Stats = (props) => {
    const siteData = useContext(SiteContext);
    const stats = siteData[0].home_page.catchy_stat;
    console.log(siteData)

    return (
        <div className="stats-page">
            {stats.map(stats => (
                <StatsCircle key="" number={stats.stat_display} description={stats.body} statsLink="google.com" />
            ))}
        </div>

    )
}

export default Stats