import React,{useState} from 'react'
import PropTypes from 'prop-types'
import {Grid,Divider} from '@material-ui/core'
import Rive, { useRive } from 'rive-react';
import MobileRive from '../components/mobileRive';
//import wave from '../public/wave.riv'
import DesignRive from '../components/designRive'
import PerformanceRive from '../components/performance'
import WebRive from '../components/webRive'
import Image from 'next/image'

function Services(props) {
  const [mobileAnimate,setMobile]=useState(false)
  const params = {
    src: '/wave.riv',
    autoplay: false,
    
  };
  const { RiveComponent, rive } = useRive(params);
  //const { RiveMobile, mobile } = useRive(params);

  const mobileStart=()=>{
    setMobile(true)
  }
  const mobileStop=()=>{
    setMobile(false)
  }

  
    return (
        <Grid>



<Grid className="section my-services" data-section="section">
    <div className="container">
      <div className="section-heading">
        <h2>What I’m good at?</h2>

        
        {/* <div className="line-dec" />
        <span>Curabitur leo felis, rutrum vitae varius eu, malesuada a tortor.
          Vestibulum congue leo et tellus aliquam, eu viverra nulla semper.
          Nullam eu faucibus diam. Donec eget massa ante.</span> */}
         
      </div>
      <Grid spacing={3} container direction='row' justify='center' className="ro">
        <Grid style={{}} item md={6} xs={12} className=''>
           <WebRive />
        </Grid>

        <Grid item md={6} xs={12} >
            <MobileRive />
        </Grid>
        <Grid item md={6} xs={12}>
         <DesignRive />
        </Grid>
        <Grid item md={6} xs={12}>
          <PerformanceRive />
        </Grid>


      </Grid>
    </div>
          <Grid className='tools' container justify='center'>
                    <div>
                    <h4 style={{textAlign:'center'}}>
                    Tools of the Trade
                  </h4>
                    </div>
                  <Grid justifyContent='center' container>
                  <p style={{textAlign:'center',marginBottom:40}}>
                    Technologies and frameworks i work with
                  </p>
                  </Grid>
            <Grid container justify='center' direction='row'>
              <Grid item xs={4} md={2}>
                <Image src='/react.png' height={80} width={80} layout='intrinsic' />
              </Grid>

              <Grid item xs={4} md={2}>
                <Image src='/next.png' height={80} width={80} layout='intrinsic' />
              </Grid>

              <Grid item xs={4} md={2}>
                <Image src='/node.png' height={80} width={120} layout='intrinsic' />
              </Grid>

              <Grid item xs={4} md={2}>
                <Image src='/mysql.png' height={80} width={80} layout='intrinsic' />
              </Grid>

              <Grid item xs={4} md={2}>
                <Image src='/mongo.png' height={80} width={80} layout='intrinsic' />
              </Grid>

              <Grid item xs={4} md={2}>
                <Image src='/flutter.png' height={80} width={80} layout='intrinsic' />
              </Grid>

              
            </Grid>
          </Grid>

            <Grid style={{margin:20}} justify='center'>
              <Divider variant='middle' style={{height:3,BackgroundColor:'rgba(255,255,255,1)'}} />
            </Grid>

          <Grid className='tool' container justify='center'>
                    <div>
                    <h3 style={{textAlign:'center'}}>
                    What i Speak
                  </h3>
                    </div>
                  <Grid justifyContent='center' container>
                  <p style={{textAlign:'center',marginBottom:40}}>
                    Programming language i am well versed with
                  </p>
                  </Grid>
            <Grid container justify='center' direction='row'>
              <Grid item xs={4} md={2}>
                <Image src='/html.png' height={80} width={80} layout='intrinsic' />
              </Grid>

              <Grid item xs={4} md={2}>
                <Image src='/css.png' height={80} width={80} layout='intrinsic' />
              </Grid>

              <Grid item xs={4} md={2}>
                <Image src='/typescript.png' height={80} width={80} layout='intrinsic' />
              </Grid>

              <Grid item xs={4} md={2}>
                <Image src='/python.png' height={80} width={80} layout='intrinsic' />
              </Grid>

              <Grid item xs={4} md={2}>
                <Image src='/java.png' height={80} width={80} layout='intrinsic' />
              </Grid>

              <Grid item xs={4} md={2}>
                <Image src='/dart.png' height={80} width={80} layout='intrinsic' />
              </Grid>

              
            </Grid>
          </Grid>
  </Grid>

        </Grid>
    )
}

Services.propTypes = {

}

export default Services

