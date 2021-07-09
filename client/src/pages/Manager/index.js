import React, { useContext, useState } from "react";
import { Grid, Container } from '@material-ui/core';
import './style.css'

import { LoginStatusContext } from '../../Context/LoginStatusContext';

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


const Manager = (props) => {
  const { loginState, authenticateLogin, logout } = useContext(LoginStatusContext)
  const { siteData, updateLoginSiteData } = useContext(SiteContext)
  const { blogData, postBlogData } = useContext(BlogContext)
  const { servicesData, postServicesData } = useContext(ServicesContext)

  const [loginForm, setLoginForm] = useState({
    login: {
      username: "",
      password: ""
    }
  })

  function handleInputChange(event) {
    const name = event.target.name
    const value = event.target.value
    let newState = { ...loginForm }
    newState.login[name] = value
    setLoginForm(newState)
  }

  return (
    <>
      {loginState ? (
        <>
          <div className="management-center">
            <button style={{padding: "10px 20px"}} className="green-btn" onClick={logout}>Logout</button>
          </div>

          <div className="management-card management-center">
            <h2>Admin Login Update</h2>
            <SiteDataFormInput path="login.username" />
            <SiteDataFormInput path="login.password" />
            <button className="green-btn" onClick={updateLoginSiteData}>Update Login</button>
          </div>


          

          <div className="management-card management-center">
            <h2>Site Data</h2>
            <SiteDataInput path="siteData.company_name" label={true} className="management-input" />
            <SiteDataInput path="siteData.contact.name" label={true} className="management-input" />
            <SiteDataInput path="siteData.contact.email" label={true} className="management-input" />
            {/* <SiteDataInput path="siteData.contact.phone" label={true} className="management-input" /> */}
            <SiteDataInput path="siteData.contact.location" label={true} className="management-input" />
            <SiteDataInput path="siteData.contact.facebook_link" label={true} className="management-input" />
            <SiteDataInput path="siteData.contact.instagram_link"  label={true} className="management-input"/>
            <SiteDataInput path="siteData.contact.twitter_link"  label={true} className="management-input"/>
          </div>
        </>
      ) : (
        <>
          <div className="management-card management-center">
            <h2>LOGIN</h2>
            <div>
              <div className="management-login">
                <label>Username:</label>
                <input style={{ marginLeft: "10px" }} name="username" value={loginForm.login.username} onChange={handleInputChange} />
              </div>
              <div className="management-login">
                <label>Password:</label>
                <input style={{ marginLeft: "10px" }} name="password" value={loginForm.login.password} onChange={handleInputChange} />
              </div>
              <button style={{ marginBottom: "60px" }} className="green-btn" onClick={() => authenticateLogin(siteData._id, loginForm)}>Login</button>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Manager