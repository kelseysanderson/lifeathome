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
      <div className="banner" style={{border:'none'}}>
        <div className="curved-div upper">
          <svg id="visual" className="banner-visual" viewBox="0 0 2000 200" width="2000" height="200" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
            <rect x="0" y="0" width="100" shapeRendering="geometricPrecision" height="450" fill="#fff"></rect>
            <path id="ld" d="M0 141L47.7 145.3C95.3 149.7 190.7 158.3 285.8 159.7C381 161 476 155 571.2 149.5C666.3 144 761.7 139 857 140.2C952.3 141.3 1047.7 148.7 1143 155C1238.3 161.3 1333.7 166.7 1428.8 169.3C1524 172 1619 172 1714.2 166.2C1809.3 160.3 1904.7 148.7 1952.3 142.8L2000 137L2000 201L1952.3 201C1904.7 201 1809.3 201 1714.2 201C1619 201 1524 201 1428.8 201C1333.7 201 1238.3 201 1143 201C1047.7 201 952.3 201 857 201C761.7 201 666.3 201 571.2 201C476 201 381 201 285.8 201C190.7 201 95.3 201 47.7 201L0 201Z" fill="#2E343C" strokeLinecap="round" strokeLinejoin="miter"></path>
          </svg>
        </div>
        <div className="curved-div">
          <div className="banner-items">
            {props.loggedIn === true && props.edit.shown === true ? (
              <>
                <Grid container style={{ border: "none" }} alignItems="center" spacing={2}>
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
              <Grid container style={{ border: "none" }} alignItems="center" spacing={2}>
                <BannerItems key={homePageData.banner_1.title} title={homePageData.banner_1.title} description={homePageData.banner_1.body} button={homePageData.banner_1.link_button_text} nav="/contact" />
                <BannerItems key={homePageData.banner_2.title} title={homePageData.banner_2.title} description={homePageData.banner_2.body} button={homePageData.banner_2.link_button_text} nav="/blog" />
              </Grid>
            )}
          </div>
          <h1>{siteData.testing}</h1>
          <svg shapeRendering="geometricPrecision" id="visual" className="banner-visual" viewBox="0 0 2000 200" width="2000" height="200" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
            <rect x="0" y="0" width="2000" height="450" fill="#2E343C" shapeRendering="geometricPrecision"></rect>
            <path d="M0 141L47.7 145.3C95.3 149.7 190.7 158.3 285.8 159.7C381 161 476 155 571.2 149.5C666.3 144 761.7 139 857 140.2C952.3 141.3 1047.7 148.7 1143 155C1238.3 161.3 1333.7 166.7 1428.8 169.3C1524 172 1619 172 1714.2 166.2C1809.3 160.3 1904.7 148.7 1952.3 142.8L2000 137L2000 201L1952.3 201C1904.7 201 1809.3 201 1714.2 201C1619 201 1524 201 1428.8 201C1333.7 201 1238.3 201 1143 201C1047.7 201 952.3 201 857 201C761.7 201 666.3 201 571.2 201C476 201 381 201 285.8 201C190.7 201 95.3 201 47.7 201L0 201Z" fill="#fff" strokeLinecap="round" strokeLinejoin="miter"></path>
          </svg>
        </div>
      </div>
    </>
  )
}

export default Banner;
