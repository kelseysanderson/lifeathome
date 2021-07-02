/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { ServicesContext } from '../../../Context/ServicesContext';
import { Grid, Container } from '@material-ui/core';
import smarthome from '../../../assets/smarthome.png';
import './style.css'

const Service = (props) => {
  const { servicesData, postServicesData } = useContext(ServicesContext)
  // const services = serviceData.servicesData.array
  console.log(servicesData.array[0])

  return (
    <>
      <Grid container spacing={0} >
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
      </Grid>
    </>

  )

}

export default Service