import React, { useState, createContext, useEffect } from "react";
import API from "../../utils/API.js";
import { Grid, Container } from '@material-ui/core';

import Input from "./input"
import BlogHandler from "./blogHandler"
import BlogInput from "./blogInput"
import './style.css'


export const ManagerContext = createContext()
export const BlogContext = createContext()

const Manager = (props) => {
  const [dataObj, setDataObj] = useState("loading");
  const [blogArr, setBlogArr] = useState("loading")
  const [blogForm, setBlogForm] = useState({
    title: "",
    description: "",
    img_src: "",
    body: ""
  })
  const [loginForm, setLoginForm] = useState({
    login: {
      username: "",
      password: ""
    }
  })

  useEffect(() => {
    loadSiteData();
    loadBlogData()
  }, []);

  function loadSiteData() {
    API.getSite()
      .then(res => {
        setDataObj(res.data[0])
      })
      .catch(err => console.log(err));
  };

  function loadBlogData() {
    API.getPosts()
      .then(res => {
        setBlogArr(res.data)
      })
      .catch(err => console.log(err));
  }

  function blogDelete(event) {
    console.log(event.target.dataset.id)
    API.deletePost(event.target.dataset.id)
      .then(res => {
        loadBlogData()
      })
      .catch(err => console.log(err));
  }

  function handleBlogInputChange(event) {
    console.log(event.target)
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const key1 = event.target.dataset.key1;

    console.log(blogForm[key1])

    // Updating the input's state
    setBlogForm({
      ...blogForm,
      [key1]: value
    });
  };

  function submitPost() {
    API.postPost(blogForm)
      .then(res => {
        setBlogForm({
          title: "",
          description: "",
          img_src: "",
          body: ""
        })
        loadBlogData()
      })
      .catch(err => console.log(err));
  }

  function handleInputChange(event) {
    console.log(event.target)
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const key1 = event.target.dataset.key1;
    const key2 = event.target.dataset.key2;

    console.log(dataObj[key1][key2])

    // Updating the input's state
    setDataObj({
      ...dataObj,
      [key1]: {
        ...dataObj[key1],
        [key2]: value
      }
    });
  };

  function replaceSiteData() {
    API.replaceSite(dataObj._id, dataObj)
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err));
  }

  function handleBlogInputChange(event) {
    console.log(event.target)
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const key1 = event.target.dataset.key1;
    const key2 = event.target.dataset.key2;

    console.log(blogForm[key1])

    // Updating the input's state
    setLoginForm({
      ...loginForm,
      [key1]: {
        ...loginForm[key1],
        [key2]: value
      }
    });;
  };

  function updateAdmin() {
    API.updateSite(dataObj._id, loginForm)
    .then(res => {
      console.log(res)
    })
    .catch(err => console.log(err));
  }

  return (
    <>
      {dataObj === "loading" || blogArr === "loading" ? (<><h1>LOADING</h1></>) : (
        <Container maxWidth="xl"  style={{ marginTop: "30px", width:"80%" }}>
          <Grid container spacing={4}>
            <ManagerContext.Provider value={{ dataObj, handleInputChange }}>
              <BlogContext.Provider value={{ blogForm, handleBlogInputChange }}>
                <Grid item xs={12}className="logoContainer">
                  <div className="management-card">
                    <h2>New Post</h2>
                    <BlogInput key1="title" />
                    <BlogInput key1="description" />
                    <BlogInput key1="img_src" />
                    <BlogInput key1="body" inputType={"textarea"}/>
                    <button className="green-btn" onClick={submitPost}>Submit Post</button>
                  </div>
                </Grid>

                <Grid item xs={12} className="logoContainer" >
                  <div>
                    <h2>Blog Management</h2>
                    <ul className="database-management">
                      {blogArr.map(post => (
                        <BlogHandler post={post} deleteFunction={blogDelete} />
                      ))}
                    </ul>
                  </div>
                </Grid>

                <Grid item xs={6}className="logoContainer">
                  <div className="management-card">
                    <h2>Site Data</h2>
                    <Input key1="siteData" key2="company_name" />
                    <Input key1="siteData" key2="contact_name" />
                    <Input key1="siteData" key2="contact_email" />
                    {/* <Input key1="siteData" key2="contact_phone" /> */}
                    <Input key1="siteData" key2="contact_location" />
                    <Input key1="siteData" key2="contact_facebook_link" />
                    <Input key1="siteData" key2="contact_instagram_link" />
                    <Input key1="siteData" key2="contact_twitter_link" />
                  </div>
                </Grid>


                <Grid item xs={12} className="logoContainer">
                  <div className="management-card home-page-data">
                    <h2>Home Page Data</h2>
                    <ul className="database-management">
                      <li>
                        <h4>Banner 1</h4>
                        <Input key1="homePage" key2="banner_1_title" />
                        <Input key1="homePage" key2="banner_1_body" inputType={"textarea"}/>
                        <Input key1="homePage" key2="banner_1_link_button_text" />
                        {/* <Input key1="homePage" key2="banner_1_link" /> */}
                      </li>

                      <li>
                        <h4>Banner 2</h4>
                        <Input key1="homePage" key2="banner_2_title" />
                        <Input key1="homePage" key2="banner_2_body" inputType={"textarea"} />
                        <Input key1="homePage" key2="banner_2_link_button_text" />
                        {/* <Input key1="homePage" key2="banner_2_link" /> */}
                      </li>

                      <li>
                        <h4>About Statement</h4>
                        {/* <Input key1="homePage" key2="about_statement_title" /> */}
                        <Input key1="homePage" key2="about_statement_body" inputType={"textarea"} />
                      </li>

                      <li>
                        <h4>Stat 1</h4>
                        <Input key1="homePage" key2="stat_1_title" />
                        <Input key1="homePage" key2="stat_1_body" inputType={"textarea"} />
                        {/* <Input key1="homePage" key2="stat_1_link_button_text" /> */}
                        <Input key1="homePage" key2="stat_1_link" />
                      </li>

                      <li>
                        <h4>Stat 2</h4>
                        <Input key1="homePage" key2="stat_2_title" />
                        <Input key1="homePage" key2="stat_2_body" inputType={"textarea"} />
                        {/* <Input key1="homePage" key2="stat_2_link_button_text" /> */}
                        <Input key1="homePage" key2="stat_2_link" />
                      </li>

                      <li>
                        <h4>Stat 3</h4>
                        <Input key1="homePage" key2="stat_3_title" />
                        <Input key1="homePage" key2="stat_3_body" inputType={"textarea"} />
                        {/* <Input key1="homePage" key2="stat_3_link_button_text" /> */}
                        <Input key1="homePage" key2="stat_3_link" />
                      </li>

                      <li>
                        <h4>Additional Box 1</h4>
                        {/* <Input key1="homePage" key2="additional_box_1_title" /> */}
                        <Input key1="homePage" key2="additional_box_1_body" inputType={"textarea"} />
                        <Input key1="homePage" key2="additional_box_1_link_button_text" />
                        <Input key1="homePage" key2="additional_box_1_link" />
                      </li>

                      <li>
                        <h4>Additional Box 2</h4>
                        {/* <Input key1="homePage" key2="additional_box_2_title" /> */}
                        <Input key1="homePage" key2="additional_box_2_body" inputType={"textarea"} />
                        {/* <Input key1="homePage" key2="additional_box_2_link_button_text" />
                        <Input key1="homePage" key2="additional_box_2_link" /> */}
                        <br></br>
                      </li>
                    </ul>
                  </div>
                </Grid>

                <Grid item xs={12} className="logoContainer" >
                  <div className="management-card">
                    <h2>Services Page Data</h2>
                    <Input key1="servicesPage" key2="title" />
                    <Input key1="servicesPage" key2="body" inputType={"textarea"} />
                    <Input key1="servicesPage" key2="link_button_text" />
                    {/* <Input key1="servicesPage" key2="link" /> */}
                  </div>
                </Grid> 

                <Grid item xs={12} className="logoContainer" >
                  <button className="green-btn update-btn" onClick={replaceSiteData}>Update Site Data</button>
                </Grid>

                <Grid item xs={12} className="logoContainer" >
                  <div className="management-card">
                    <h2>Admin Login</h2>
                    <div className="data-form">
                      <label>Username:</label>
                        <input style={{width: "100%"}}
                          className="management-input"
                          data-key1="login"
                          data-key2="username"
                          // eslint-disable-next-line no-eval
                          value={loginForm.login.username}
                          onChange={handleInputChange} 
                        />
                      <br></br>
                    </div>

                    <div className="data-form">
                      <label>Password:</label>
                        <input style={{width: "100%"}}
                          className="management-input"
                          data-key1="login"
                          data-key2="username" 
                          // eslint-disable-next-line no-eval
                          value={loginForm.login.password}
                          onChange={handleInputChange} 
                        />
                      <br></br>
                    </div>
                  </div>
                </Grid>

                <Grid item xs={12} className="logoContainer" >
                  <button className="green-btn update-btn" onClick={updateAdmin}>Update Admin Data</button>
                </Grid>

              </BlogContext.Provider>
            </ManagerContext.Provider>
          </Grid>
        </Container>
      )}
    </>
  )
}

export default Manager