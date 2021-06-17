import React from 'react';
import { Grid } from '@material-ui/core';
import smarthome from '../../../assets/smarthome.png';
import './style.css'

const Service = (props) => {
    return (
        <>
            <div className="container service-container" id="smarthome">
                <Grid style={{ border: "none" }} item xs={9} md={6}>
                    <img className="service-image" src={smarthome} alt="smarthome with phone app"></img>
                </Grid>

                <Grid style={{ border: "none" }} item xs={9} md={6}>
                    <div className="service-text">
                        <h1>Smart Home</h1>
                        <p> Nullam pulvinar vestibulum quam, eu posuere quam tempus non. Aliquam ultricies orci nec gravida ultrices. Sed fermentum arcu dolor, convallis lobortis lectus faucibus placerat. Proin congue, dolor aliquet tristique tempor, odio felis convallis lacus, quis tincidunt nibh est nec diam. Aliquam posuere, ex ac ornare vehicula, ante justo posuere turpis, at fringilla enim nulla quis urna. Maecenas eleifend pharetra semper.</p>
                        <button className="green-btn">Schedule Initial Consultation Now</button>
                    </div>
                </Grid>
            </div>
        </>
    )

}

export default Service