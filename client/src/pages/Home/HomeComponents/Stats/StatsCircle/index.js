import React from 'react';
// import { Box, Grid } from '@material-ui/core';
import './style.css';

const StatsCircle = (props) => {
    return (
        <div className="circle-container">
            <svg id="visual" className=" stats-visual" viewBox="0 0 960 540" width="350" height="200" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
                <g fill="#AED3BE">
                    <circle r="265" cx="503" cy="277"></circle>
                </g>
                <text className="stats-number title-text" x={1000 / 2} y={590 / 2} dominantBaseline="middle" textAnchor="middle">{props.statTitle}</text>
            </svg>
            <p className="stats-description" dominantBaseline="middle" textAnchor="middle">{props.statBody}<a href={props.statLink} target="_blank" rel="noreferrer"> Read More Here</a></p>
        </div>
    )
}

export default StatsCircle