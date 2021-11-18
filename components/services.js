import React,{useState} from 'react'
import PropTypes from 'prop-types'
import {Grid,Col,Row} from '@material-ui/core'
import Rive, { useRive } from 'rive-react';
//import wave from '../public/wave.riv'

function Services(props) {
    return (
        <Grid container>
            <Grid className="section my-services" data-section="section2">
    <div className="container">
      <div className="section-heading">
        <h2>What I’m good at?</h2>
        {/* <div className="line-dec" />
        <span>Curabitur leo felis, rutrum vitae varius eu, malesuada a tortor.
          Vestibulum congue leo et tellus aliquam, eu viverra nulla semper.
          Nullam eu faucibus diam. Donec eget massa ante.</span> */}
         
      </div>
      <Grid spacing={7} container direction='row' justify='center' className="ro">
        <Grid style={{}} item md={6} xs={12} className=''>
          <div className="service-item service-paper">
            <div className=" second-service-icon service-icon" />
            <h4>Web Development</h4>
            <p>
              Full-stack web technologies ranging from web applications to E-commerce solutions through a variety of use cases.
            </p>
             
          </div>
        </Grid>

        <Grid item md={6} xs={12} >
          <div className="service-item service-paper">
            <div className=" first-service-icon service-icon" />
            <h4>
              Mobile app development
            </h4>
            <p>
              Cross-platform mobile applications for android and IOS devices optimized for performance and scalability.
            </p>
          </div>
        </Grid>
        <Grid item md={6} xs={12}>
          <div className="service-item service-paper">
            <div className="fourth-service-icon service-icon" />
            <h4>UI/UX Design</h4>
            <p>
              Beautiful and responsive 
            </p>
          </div>
        </Grid>
        <Grid item md={6} xs={12}>
          <div className="service-item service-paper">
            <div className="third-service-icon  service-icon" />
            <h4>Admin Dashboard</h4>
            <p>
              Vivamus et dui a massa venenatis fringilla. Proin lacus massa,
              eleifend sed fermentum in, dignissim vel metus. Nunc accumsan
              leo nec felis porttitor.
            </p>
          </div>
        </Grid>

        <Grid style={{}} item md={6} xs={12} className=''>
          <div className="service-item service-paper">
            <div className="first-service-icon service-icon" />
            <h4>HTML5 &amp; CSS3</h4>
            <p>
              Phasellus non convallis dolor. Integer tempor hendrerit arcu
              at bibendum. Sed ac ante non metus vehicula congue quis eget
              eros.
            </p>
          </div>
        </Grid>

        <Grid style={{}} item md={6} xs={12} className=''>
          <div className="service-item service-paper">
            <div className="first-service-icon service-icon" />
            <h4>HTML5 &amp; CSS3</h4>
            <p>
              Phasellus non convallis dolor. Integer tempor hendrerit arcu
              at bibendum. Sed ac ante non metus vehicula congue quis eget
              eros.
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  </Grid>
            
        </Grid>
    )
}

Services.propTypes = {

}

export default Services

