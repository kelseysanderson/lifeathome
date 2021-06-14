import React from 'react';
import transparentLogo from '../../../public/assets/logos/transparent_logo.png';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';


/**
* @author
* @function Header
**/

const Header = (props) => {
    return (
        <>
            <Container maxWidth="lg">
                <Grid 
                    container justify="space-between" 
                    alignItems="center" 
                    spacing="3"
                    >

                    <Grid item xs={12} sm={6} style={logoContainer}>
                        <img style={headerImage} src={transparentLogo} alt="Life at Home Logo: orange and light green outline of an A-frame house"></img>
                        <h1 style={logoText}>Life at Home</h1>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <ul style={list}>
                            <li>
                                Services
                        </li>
                            <li>
                                Blog
                        </li>
                        </ul>
                    </Grid>
                </Grid>

            </Container>
        </>

    )

}

export default Header;

const headerContainer = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
}
const headerImage = {
    height: "50px",
}
const logoContainer = {
    display: "inherit",
    alignItems: "center"
}
const logoText = {
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '30px',
    fontWeight: '200',
    marginLeft: '20px'
}
const list = {
    display:"flex",
    listStyleType: "none"
}