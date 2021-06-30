import React, { useContext } from 'react';
import { SiteContext } from '../../../../Context/SiteContext';
import Input from '../../../../components/Inputs/siteDataInput'
import { Grid } from '@material-ui/core';
import './style.css';

const AboutStatement = (props) => {
    const { siteData } = useContext(SiteContext);
    const homePageData = siteData.homePage;
    const loggedIn = true
    console.log(siteData)

    return (
        <>
            <div className="about-stmt">
                <Grid container justify="center" alignItems="center" >
                    {loggedIn === true && props.edit.shown === true ? (
                        <Grid item xs={12} sm={6}>
                            <Input path="homePage.about_statement.body" className="about-text full-width" updateBtn="align-btn-left" inputType="textarea" />
                        </Grid>
                    ) : (
                        <Grid item xs={12} sm={6}>
                            <p className="about-text">
                                {homePageData.about_statement.body}
                            </p>
                        </Grid>
                    )}
                </Grid>
            </div>
        </>
    )

}

export default AboutStatement;