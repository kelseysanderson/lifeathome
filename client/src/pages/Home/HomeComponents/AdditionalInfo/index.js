import React, { useContext } from "react";
import { SiteContext } from '../../../../Context/SiteContext';
import Input from '../../../../components/Inputs/siteDataInput'
import { NavLink } from 'react-router-dom';
import { Grid, Box } from '@material-ui/core';
import './style.css';

const AdditionalInfo = (props) => {
  const { siteData } = useContext(SiteContext);
  const homePageData = siteData.homePage;
  // console.log("HERE", homePageData)

  return (
    <section className="additional-info">
      <Box display="flex" justifyContent="space-evenly" alignItems="center">
        <Grid item xs={4}>
          {props.loggedIn === true && props.edit.shown === true ? (
            <>
              <Input path="homePage.additional_box_1.body" inputType="textarea" className="additional-info-edit full-width" updateBtn="align-btn-left" />
              <div className="learn-more-btn">
              <Input path="homePage.additional_box_1.link" titleStyling="true" className="" inputType="textarea" updateBtn="align-btn-left" />
              <Input path="homePage.additional_box_1.link_button_text" className="additional-info-edit full-width" updateBtn="align-btn-left" />
              <a href={homePageData.additional_box_1.link}><button className="green-btn">{homePageData.additional_box_1.link_button_text}</button></a>
              </div>
            </>
          ) : (
            <>
              <p>{homePageData.additional_box_1.body}</p>
              <div className="learn-more-btn">
                <a href={`${homePageData.additional_box_1.link}`} target="_blank" rel="noreferrer"><button className="green-btn">{homePageData.additional_box_1.link_button_text}</button></a>
              </div>
            </>
          )}
        </Grid>

        <Grid item xs={4}>
          {props.loggedIn === true && props.edit.shown === true ? (
            <div className="top-bottom-border mission-text">
              <Input path="homePage.additional_box_2.body" className="top-bottom-border mission-text additional-info-edit" inputType="textarea" updateBtn="align-btn-left" />
            </div>
          ) : (
            <p className="top-bottom-border mission-text">{homePageData.additional_box_2.body}</p>
          )}
        </Grid>
      </Box>
    </section>
  )
}

export default AdditionalInfo