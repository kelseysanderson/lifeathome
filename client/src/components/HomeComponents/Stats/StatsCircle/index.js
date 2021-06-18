import React from 'react';
import { Grid } from '@material-ui/core';
import './style.css';

const StatsCircle = (props) => {
    return (
        <div className="container">
            <Grid item xs={6} sm={4}>
                <svg id="visual" viewBox="0 0 960 540" width="600" height="200" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
                    <rect x="0" y="0" width="960" height="540" fill="#fff"></rect>
                    <g fill="#AED3BE">
                        <circle r="265" cx="503" cy="277"></circle>
                    </g>
                    <text className="stats-number title-text" x={1000 / 2} y={590 / 2} dominantBaseline="middle" textAnchor="middle">{props.number}</text>
                </svg>
                <p className="stats-description">{props.description}<a href={props.statsLink} target="_blank" rel="noreferrer"> Read More Here</a></p>
            </Grid>
        </div>

    )

}

export default StatsCircle