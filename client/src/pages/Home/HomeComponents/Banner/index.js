import React, { useContext } from "react";
import { SiteContext } from '../../../../Context/SiteContext';
import { NavLink } from 'react-router-dom';
import BannerItems from './BannerItems/index.js';
import { Grid } from '@material-ui/core';
import Input from '../../../../components/Inputs/siteDataInput'
import './style.css'

const Banner = (props) => {
  const { siteData } = useContext(SiteContext);
  const homePageData = siteData.homePage;

  return (
    <>
        <div className="banner-container">
          <div className="banner-items">
            {props.loggedIn === true && props.edit.shown === true ? (
              <>
                <Grid container style={{ border: "none" }} alignItems="center" justifyContent="center" spacing={2}>
                  <Grid item style={{ border: "none" }} xs={12} sm={6}>
                    <div>
                      <Input path="homePage.banner_1.title" className="title-text banner-title dark-background auto-width" updateBtn="align-btn-left" />
                      <Input path="homePage.banner_1.body" inputType="textarea" className="banner-description dark-background light-text" updateBtn="align-btn-left" />
                      <NavLink exact to="/contact"><button className="orange-btn banner-btn">{siteData.homePage.banner_1.link_button_text}</button></NavLink>
                    </div>
                  </Grid>
                  <Grid item style={{ border: "none" }} xs={12} sm={6}>
                    <div>
                      <Input path="homePage.banner_2.title" className="title-text banner-title dark-background auto-width" updateBtn="align-btn-left" />
                      <Input path="homePage.banner_2.body" inputType="textarea" className="banner-description dark-background light-text" updateBtn="align-btn-left" />
                      <NavLink exact to="/blog"><button className="orange-btn banner-btn">{siteData.homePage.banner_2.link_button_text}</button></NavLink>
                    </div>
                  </Grid>
                </Grid>
              </>
            ) : (
              <Grid container style={{ border: "none" }} spacing={2}>
                <BannerItems key={homePageData.banner_1.title} title={homePageData.banner_1.title} description={homePageData.banner_1.body} button={homePageData.banner_1.link_button_text} nav="/contact" />
                <BannerItems key={homePageData.banner_2.title} title={homePageData.banner_2.title} description={homePageData.banner_2.body} button={homePageData.banner_2.link_button_text} nav="/blog" />
              </Grid>
            )}
          </div>
        </div>
    </>
  )
}

export default Banner;
