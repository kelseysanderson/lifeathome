import React, {useContext} from "react";
import originalLogo from '../../assets/logos/transparent_logo.png';
import { Container, Grid } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import {LoginStatusContext} from '../../Context/LoginStatusContext';
import { SiteContext } from '../../Context/SiteContext';
import './style.css'

const Header = (props) => {
  const {loginState} = useContext(LoginStatusContext)
  const { siteData } = useContext(SiteContext);

  return (
    <header>
      <Container maxWidth="xl" style={{ marginTop: "10px", marginBottom: "10px" }}>
        <Grid container justify="center" alignItems="center" spacing={4}>
          <Grid item xs={12} sm={12} md={8} lg={9} className="logoContainer">
            <NavLink exact to="/"><img className="headerImage" src={originalLogo} alt="Life at Home Logo: orange and light green outline of an A-frame house"></img></NavLink>
            <NavLink exact to="/"><h1 className="logo-text">{siteData.siteData.company_name}</h1></NavLink>
          </Grid>
          <Grid className="navBar" item xs={12} sm={12} md={4} lg={3}>
            <ul className="navList">
              {loginState ? (<li><p><NavLink exact activeStyle={{ textDecoration: "underline" }} to="/manager">Admin</NavLink></p></li>): (<></>)}
              <li><p><NavLink exact activeStyle={{ textDecoration: "underline" }} to="/">Home</NavLink></p></li>
              <li><p><NavLink exact activeStyle={{ textDecoration: "underline" }} to="/services">Services</NavLink></p></li>
              <li><p><NavLink exact activeStyle={{ textDecoration: "underline" }} to="/blog">Blog</NavLink></p></li>
              <li><p><NavLink exact activeStyle={{ textDecoration: "underline" }} to="/contact">Contact</NavLink></p></li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </header>
  )
}

export default Header;
