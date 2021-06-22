import React, { useContext } from "react";
import { SiteContext } from '../../../../Context/SiteContext';
import BannerItems from './BannerItems/index.js';
import { Grid } from '@material-ui/core';
import './style.css'

const Banner = (props) => {
  const siteData = useContext(SiteContext);
  const homePageData = siteData.homePage;

  return (
    <div className="banner">
      <div className="curved-div upper">
        <svg  id="visual" className="banner-visual" viewBox="0 0 2000 200" width="2000" height="200" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
          <rect x="0" y="0" width="2000" shapeRendering="geometricPrecision" height="450" fill="#fff"></rect>
          <path d="M0 141L47.7 145.3C95.3 149.7 190.7 158.3 285.8 159.7C381 161 476 155 571.2 149.5C666.3 144 761.7 139 857 140.2C952.3 141.3 1047.7 148.7 1143 155C1238.3 161.3 1333.7 166.7 1428.8 169.3C1524 172 1619 172 1714.2 166.2C1809.3 160.3 1904.7 148.7 1952.3 142.8L2000 137L2000 201L1952.3 201C1904.7 201 1809.3 201 1714.2 201C1619 201 1524 201 1428.8 201C1333.7 201 1238.3 201 1143 201C1047.7 201 952.3 201 857 201C761.7 201 666.3 201 571.2 201C476 201 381 201 285.8 201C190.7 201 95.3 201 47.7 201L0 201Z" fill="#232021" strokeLinecap="round" strokeLinejoin="miter"></path>
        </svg>
      </div>

      <div className="curved-div">
        <div className="banner-items">
        <Grid style={{ border: "none" }} container justify="space-between" alignItems="center" spacing={1}>
            <BannerItems key={homePageData.banner_1_title} title={homePageData.banner_1_title} description={homePageData.banner_1_body} button={homePageData.banner_1_link_button_text} />
            <BannerItems key={homePageData.banner_2_title} title={homePageData.banner_2_title} description={homePageData.banner_2_body} button={homePageData.banner_2_link_button_text} />
        </Grid>
        </div>

        <h1>{siteData.testing}</h1>
        <svg  shape-rendering="geometricPrecision" id="visual" className="banner-visual" viewBox="0 0 2000 200" width="2000" height="200" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
        <rect x="0" y="0" width="2000" height="450" fill="#232021" shapeRendering="geometricPrecision"></rect>
          <path d="M0 141L47.7 145.3C95.3 149.7 190.7 158.3 285.8 159.7C381 161 476 155 571.2 149.5C666.3 144 761.7 139 857 140.2C952.3 141.3 1047.7 148.7 1143 155C1238.3 161.3 1333.7 166.7 1428.8 169.3C1524 172 1619 172 1714.2 166.2C1809.3 160.3 1904.7 148.7 1952.3 142.8L2000 137L2000 201L1952.3 201C1904.7 201 1809.3 201 1714.2 201C1619 201 1524 201 1428.8 201C1333.7 201 1238.3 201 1143 201C1047.7 201 952.3 201 857 201C761.7 201 666.3 201 571.2 201C476 201 381 201 285.8 201C190.7 201 95.3 201 47.7 201L0 201Z" fill="#fff" strokeLinecap="round" strokeLinejoin="miter"></path>
        </svg>
      </div>
    </div>
  )
}

export default Banner
