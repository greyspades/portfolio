import React,{useState,useEffect} from 'react'
import Image from 'next/image'
import {Grid,Paper,Button,Divider} from '@mui/material'
import Fade from 'react-reveal/Fade'
import Rive, {useRive} from 'rive-react'
//import { motion } from 'framer-motion'


const Front = () => {
  

  const params = {
    src: '/yinyang.riv',
    autoplay: true,
    
  };

  const { RiveComponent, rive } = useRive(params);
  

    return (
        <div style={{}} className='containe front'>
            <Grid style={{}} className='front-container' container justifyContent='center' direction='row'>
              <Grid container justifyContent='center' xs={12} md={6}>
                <div style={{}} className='yin-container'>
                 <RiveComponent  className='yin-yang' style={{}} />
                 {/* <div className='me-icon' /> */}
                </div>

              </Grid>

              <Grid className='front-intro' container justifyContent='center' xs={12} md={6}>
                  <Fade>
                  <div className='main-header'>
                  <h1  style={{textAlign:'center',color:'white',fontSize:40}}>
                Hi i'm Dera, 
              </h1>
            
              <Rive className='under-wave' src='/wave.riv' />
                  </div>
              <p className='main-intro' style={{textAlign:'center',color:'white'}}>
                A full stack developer and UI/UX designer with a nack for 
                performant and scalable software solutions.<br/>
                I am detail oriented and an avid learner with a nack for learning and creating something new.
              </p>
                  </Fade>
              
              </Grid>

              
            </Grid>
           
            
        </div>
    )
}

export default Front
