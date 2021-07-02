import React, { useContext } from "react";
import { Grid, Container } from '@material-ui/core';

import { SiteContext } from '../../Context/SiteContext';
import SiteDataInput from "../../components/Inputs/siteDataInput"
import SiteDataFormInput from "../../components/Inputs/siteDataFormInput"


import { BlogContext } from '../../Context/BlogContext';
import BlogDataInput from "../../components/Inputs/blogDataInput"
import BlogDataFormInput from "../../components/Inputs/blogDataFormInput"
import BlogDataDelete from "../../components/DeleteButtons/blogDataDelete"

import { ServicesContext } from '../../Context/ServicesContext';
import ServicesDataInput from "../../components/Inputs/servicesDataInput"
import ServicesDataFormInput from "../../components/Inputs/servicesDataFormInput"
import ServicesDataDelete from "../../components/DeleteButtons/servicesDataDelete"
import './style.css'

const Manager = (props) => {
  const { updateLoginSiteData } = useContext(SiteContext)
  const { blogData, postBlogData } = useContext(BlogContext)
  const { servicesData, postServicesData } = useContext(ServicesContext)


  return (
    <>
      <Container maxWidth="xl" style={{ marginTop: "30px", width: "80%" }}>
        <Grid container spacing={4}>

          <Grid item xs={12} className="logoContainer" >
            <div className="management-card">
              <h2>Admin Login Update</h2>
              <SiteDataFormInput path="login.username" />
              <SiteDataFormInput path="login.password" />
              <button className="green-btn" onClick={updateLoginSiteData}>Update Login</button>
            </div>
          </Grid>

          <Grid item xs={12} className="logoContainer">
            <div className="management-card">
              <h2>Services</h2>
              <ServicesDataFormInput path="title" />
              <ServicesDataFormInput path="body" inputType="textarea" />
              <ServicesDataFormInput path="img_src" />
              <ServicesDataFormInput path="button_text" />
              <ServicesDataFormInput path="internal_link" />
              <button className="green-btn" onClick={postServicesData}>Submit Post</button>
            </div>
          </Grid>

          <Grid item xs={12} className="logoContainer" >
            <div>
              <h2>Services Management</h2>
              <ul className="database-management">
                {servicesData.array.map((post, index) => (
                  <>
                    <ServicesDataInput key={"title" + index} {...post} index={index} path="title" />
                    <ServicesDataDelete key={"deleteBtn" + index} postId={post._id} />
                  </>
                ))}
              </ul>
            </div>
          </Grid>

          <Grid item xs={12} className="logoContainer">
            <div className="management-card">
              <h2>New Post</h2>
              <BlogDataFormInput path="title" />
              <BlogDataFormInput path="author" />
              <BlogDataFormInput path="description" inputType="textarea" />
              <BlogDataFormInput path="img_src" />
              <BlogDataFormInput path="body" inputType={"textarea"} />
              <button className="green-btn" onClick={postBlogData}>Submit Post</button>
            </div>
          </Grid>

          <Grid item xs={12} className="logoContainer" >
            <div>
              <h2>Blog Management</h2>
              <ul className="database-management">
                {blogData.array.map((post, index) => (
                  <>
                    <BlogDataInput key={"title" + index} {...post} index={index} path="title" />
                    <BlogDataDelete key={"deleteBtn" + index} postId={post._id} />
                  </>
                ))}
              </ul>
            </div>
          </Grid>

          <Grid item xs={6} className="logoContainer">
            <div className="management-card">
              <h2>Site Data</h2>
              <SiteDataInput path="siteData.company_name" />
              <h3>Contact</h3>
              <SiteDataInput path="siteData.contact.name" />
              <SiteDataInput path="siteData.contact.email" />
              {/* <SiteDataInput path="siteData.contact.phone" /> */}
              <SiteDataInput path="siteData.contact.location" />
              <SiteDataInput path="siteData.contact.facebook_link" />
              <SiteDataInput path="siteData.contact.instagram_link" />
              <SiteDataInput path="siteData.contact.twitter_link" />
            </div>
          </Grid>

          <Grid item xs={12} className="logoContainer">
            <div className="management-card home-page-data">
              <h2>Home Page Data</h2>
              <ul className="database-management">
                <li>
                  <h4>Banner 1</h4>
                  <SiteDataInput path="homePage.banner_1.title" />
                  <SiteDataInput path="homePage.banner_1.body" inputType={"textarea"} />
                  <SiteDataInput path="homePage.banner_1.link_button_text" />
                  {/* <SiteDataInput path="homePage.banner_1.link" /> */}
                </li>

                <li>
                  <h4>Banner 2</h4>
                  <SiteDataInput path="homePage.banner_2.title" />
                  <SiteDataInput path="homePage.banner_2.body" inputType={"textarea"} />
                  <SiteDataInput path="homePage.banner_2.link_button_text" />
                  {/* <SiteDataInput path="homePage.banner_2.link" /> */}
                </li>

                <li>
                  <h4>About Statement</h4>
                  {/* <SiteDataInput path="homePage.about_statement.title" /> */}
                  <SiteDataInput path="homePage.about_statement.body" inputType={"textarea"} />
                </li>

                <li>
                  <h4>Stat 1</h4>
                  <SiteDataInput path="homePage.stat_1.title" />
                  <SiteDataInput path="homePage.stat_1.body" inputType={"textarea"} />
                  {/* <SiteDataInput path="homePage.stat_1.link_button_text" /> */}
                  <SiteDataInput path="homePage.stat_1.link" />
                </li>

                <li>
                  <h4>Stat 2</h4>
                  <SiteDataInput path="homePage.stat_2.title" />
                  <SiteDataInput path="homePage.stat_2.body" inputType={"textarea"} />
                  {/* <SiteDataInput path="homePage.stat_2.link_button_text" /> */}
                  <SiteDataInput path="homePage.stat_2.link" />
                </li>

                <li>
                  <h4>Stat 3</h4>
                  <SiteDataInput path="homePage.stat_3.title" />
                  <SiteDataInput path="homePage.stat_3.body" inputType={"textarea"} />
                  {/* <SiteDataInput path="homePage.stat_3.link_button_text" /> */}
                  <SiteDataInput path="homePage.stat_3.link" />
                </li>

                <li>
                  <h4>Additional Box 1</h4>
                  {/* <SiteDataInput path="homePage.additional_box_1.title" /> */}
                  <SiteDataInput path="homePage.additional_box_1.body" inputType={"textarea"} />
                  <SiteDataInput path="homePage.additional_box_1.link_button_text" />
                  <SiteDataInput path="homePage.additional_box_1.link" />
                </li>

                <li>
                  <h4>Additional Box 2</h4>
                  {/* <SiteDataInput path="homePage.additional_box_2.title" /> */}
                  <SiteDataInput path="homePage.additional_box_2.body" inputType={"textarea"} />
                  {/* <SiteDataInput path="homePage.additional_box_2.link_button_text" />
                          <SiteDataInput path="homePage.additional_box_2.link" /> */}
                  <br></br>
                </li>
              </ul>
            </div>
          </Grid>

          {/* <Grid item xs={12} className="logoContainer" >
                    <div className="management-card">
                      <h2>Services Page Data</h2>
                      {dataObj.servicePage.posts.map((post, index) => ( 
                      <>
                        <SiteDataInput path={`servicesPage.posts[${index}].title`} />
                        <SiteDataInput path={`servicesPage.posts[${index}].body`} inputType={"textarea"} />
                        <SiteDataInput path={`servicesPage.posts[${index}].link_button_text`} />
                        <SiteDataInput path="servicesPage.post.link" /> 
                      </>
                      ))}
                    
                    </div>
                  </Grid>  */}
        </Grid>
      </Container>
    </>
  )
}

export default Manager