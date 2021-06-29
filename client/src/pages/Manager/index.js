import React, {useState, createContext, useEffect, useContext} from "react";
import { SiteContext } from '../../Context/SiteContext';
import API from "../../utils/API.js";
import { Grid, Container } from '@material-ui/core';

import SiteDataInput from "./siteDataInput"
import BlogHandler from "./blogHandler"
import BlogInput from "./blogInput"
import './style.css'

export const BlogContext = createContext()

const Manager = (props) => {
  const {sitePage} = useContext(SiteContext);
  const [blogArr, setBlogArr] = useState("loading")
  const [blogForm, setBlogForm] = useState({
    title: "",
    description: "",
    img_src: "",
    body: ""
  })
  // const [dataObj, setDataObj] = useState("loading");
  // const [loginForm, setLoginForm] = useState({
  //   login: {
  //     username: "",
  //     password: ""
  //   }
  // })
  // const [updateQueue, setUpdateQueue] = useState({})

  useEffect(() => {
    // loadSiteData();
    loadBlogData()
  }, []);

  // function loadSiteData() {
  //   API.getSite()
  //     .then(res => {
  //       setDataObj(res.data[1])
  //     })
  //     .catch(err => console.log(err));
  // };

  function loadBlogData() {
    API.getPosts()
      .then(res => {
        setBlogArr(res.data)
      })
      .catch(err => console.log(err));
  }

  // function handleLoginInputChange(event) {
  //   console.log(event.target)
  //   console.log(event.target.dataset)
  //   // Getting the value and name of the input which triggered the change
  //   let value = event.target.value;
  //   const key1 = event.target.dataset.key1;
  //   const key2 = event.target.dataset.key2;

  //   // Updating the input's state
  //   setLoginForm({
  //     ...loginForm,
  //     [key1]: {
  //       ...loginForm[key1],
  //       [key2]: value
  //     }
  //   });;
  // };

  function handleBlogInputChange(event) {
    console.log(event.target)
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const key1 = event.target.dataset.key1;

    // Updating the input's state
    setBlogForm({
      ...blogForm,
      [key1]: value
    });
  };

  function blogDelete(event) {
    API.deletePost(event.target.dataset.id)
      .then(res => {
        loadBlogData()
      })
      .catch(err => console.log(err));
  }

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

  // function updateAdmin() {
  //   API.updateSite(dataObj._id, loginForm)
  //   .then(res => {
  //     console.log(res)
  //     setLoginForm({
  //       login: {
  //         username: "",
  //         password: ""
  //       }
  //     })
  //   })
  //   .catch(err => console.log(err));
  // }

  //DYNAMIC REST FUNCTIONALITY
  // function handleInputChange (event) {
  //   updateInputChange(event)
  //   updateUpdateQueue(event)
  // }

  // function updateInputChange(event) {
  //   let value = event.target.value;
  //   const path = event.target.dataset.path;
  //   updatePathHandler(setDataObj, path, {...dataObj}, value)
  // }

  // function updateUpdateQueue (event) {
  //   const path = event.target.dataset.path;
  //   updatePathHandler(setUpdateQueue, path, {...updateQueue}, true)
  // }

  // function updateSiteData(path, value) {
  //   API.updateSite(dataObj._id,{[path]: value})
  //     .then(res => {
  //       updatePathHandler(setUpdateQueue, path, {...updateQueue}, false)
  //     })
  //     .catch(err => console.log(err));
  // }

  // function updatePathHandler (updateFunction, path, object, value) {
  //   let newState = object
  //   var schema = newState;  // a moving reference to internal objects within obj
  //   var pList = path.split('.');
  //   for(var i = 0; i < pList.length-1; i++) {
  //     var elem = pList[i];
  //     if( !schema[elem] ) schema[elem] = {}
  //     schema = schema[elem];
  //   }
  //   schema[pList[pList.length-1]] = value;
  //   updateFunction(newState)
  // }

  return (
    <>
      {sitePage === "loading" || blogArr === "loading" ? (<><h1>LOADING</h1></>) : (
        <Container maxWidth="xl"  style={{ marginTop: "30px", width:"80%" }}>
          <Grid container spacing={4}>
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
                          <SiteDataInput path="homePage.banner_1.body" inputType={"textarea"}/>
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

                  <Grid item xs={12} className="logoContainer" >
                    <div className="management-card">
                      <h2>Admin Login</h2>
                      <SiteDataInput path="login.username" />
                      <SiteDataInput path="login.password" />
                    </div>
                  </Grid>
              </BlogContext.Provider>
          </Grid>
        </Container>
      )}
    </>
  )
}

export default Manager