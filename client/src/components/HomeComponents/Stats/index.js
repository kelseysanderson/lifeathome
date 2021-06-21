import React, { useContext } from "react";
import { SiteContext } from '../../../Context/SiteContext';
import StatsCircle from './StatsCircle'
import './style.css';

const Stats = (props) => {
    const siteData = useContext(SiteContext);
    const stats = siteData[0].home_page.catchy_stat;

    return (
        <div className="stats-page">
            {/* {stats.map(stats => ( */}
                <StatsCircle key={stats._id}  stats={stats} statsLink="google.com" />
             {/* ))} */}
        </div>
    )
}

export default Stats