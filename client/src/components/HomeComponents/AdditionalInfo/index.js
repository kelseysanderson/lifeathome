import React from "react";
import { Grid, Box } from '@material-ui/core';
import './style.css';

const AdditionalInfo = (props) => {
    return (
        <section className="additional-info">
            <Box display="flex" justifyContent="space-evenly" alignItems="center">
                <Grid item xs={4}>
                    <p>Modern Living Spaces means so much more than technology and smart homes. Modern Living Spaces considers accessibility to all people and environmental sustainability.</p>
                    <div className="learn-more-btn">
                        <button className="green-btn">Learn More</button>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <p className="top-bottom-border mission-text">Responsible communities require responsible approaches and actions.</p>
                </Grid>
            </Box>
        </section>
    )
}

export default AdditionalInfo