/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ServicesContext } from '../../../Context/ServicesContext';
import { LoginStatusContext } from '../../../Context/LoginStatusContext';
import { Grid } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import ServiceInput from '../../../components/Inputs/servicesDataInput';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import './style.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
const Service = (props) => {
  const { servicesData } = useContext(ServicesContext)
  const classes = useStyles();
  const [editBtn, setEditBtn] = useState({ shown: false })
  const [toggleClass, setToggleClass] = useState({ edit: false, render: <EditIcon className="icon" /> });
  const loggedInContext = (useContext(LoginStatusContext));
  // const loggedIn = loggedInContext.loginState;

  const loggedIn = true
  function toggleEditBtn() {
    setEditBtn({ shown: !editBtn.shown })
    if (toggleClass.edit === false) {
      setToggleClass({
        edit: !toggleClass.edit,
        render:
          <VisibilityIcon className="icon" />
      })
    } else if (toggleClass.edit === true) {
      setToggleClass({
        edit: !toggleClass.edit,
        render:
          <EditIcon className="icon" />
      })
    }
  }

  return (
    <>
      {loggedIn ? (
        <section className="edit-buttons">
          <IconButton onClick={toggleEditBtn}>
            {toggleClass.render}
          </IconButton>
        </section>
      ) : null}
      <div className="title-animation" >
        <h1 className="services-title-text">Consulting Services</h1>
        <hr className="services-underline"></hr>
        <p className="services-title-text service-subtitle">If you're interested in scheduling a consultation contact us <NavLink exact to="/contact">contact us.</NavLink></p>
      </div>

      <Grid container spacing={0} >
        {loggedIn === true && editBtn.shown === true ? (

          <Grid item xs={12}>
             {servicesData.array.map((service, index) => (
                <div className="container service-container" id="smarthome">
                  <Grid style={{ border: "none" }} item xs={7}>
                    <img className="service-image" src={service.img_src} alt="smarthome with phone app"></img>
                    <ServiceInput {...servicesData.array} id={service._id} index={index} path="img_src" />
                  </Grid>
                  <Grid style={{ border: "none" }} item xs={5}>
                    <div className="service-text">
                    <ServiceInput {...servicesData.array} index={index} id={service._id} path="title" className="admin-blog-input"/>
                    <ServiceInput {...servicesData.array} index={index} id={service._id} path="body" className="admin-blog-input"/>
                      <button className="green-btn">{service.button_text}</button>
                      <ServiceInput {...servicesData.array} index={index} id={service._id} path="button_text" className="admin-blog-input"/>
                      <ServiceInput {...servicesData.array} index={index} id={service._id} path="internal_link" className="admin-blog-input"/>
                    </div>
                  </Grid>
                </div>
             )
             )}

          </Grid>

            ) : (
            <Grid item xs={12}>
              {servicesData.array.map((service, index) => (
                <div className="container service-container" id="smarthome">
                  <Grid style={{ border: "none" }} item xs={7}>
                    <img className="service-image" src={service.img_src} alt="smarthome with phone app"></img>
                  </Grid>
                  <Grid style={{ border: "none" }} item xs={5}>
                    <div className="service-text">
                      <h1>{service.title}</h1>
                      <p> {service.body}</p>
                      <button className="green-btn">{service.button_text}</button>
                    </div>
                  </Grid>
                </div>
               )
              )}
            </Grid>
            )}
          </Grid>
    </>

      )

}

      export default Service