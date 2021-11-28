import React,{useState,useEffect} from 'react'
import Image from 'next/image'
import me from '../public/me2.png'
import {Grid,Paper} from '@material-ui/core'
import Rive,{useRive} from 'rive-react'
import DesignRive from './designRive'


const Sidebar = () => {

  const params = {
    src: '/wave2.riv',
    autoplay: true,
    
  };
  const { RiveComponent, rive } = useRive(params);
    return (
        <div >
            <div className="responsive-nav">
    <i className="fa fa-bars" id="menu-toggl" />
    <div id="menu" style={{borderRight:'7px solid #8c363e',backgroundColor:'rgb(101,101,106)' }} className="menu side-menu">
      
      <div style={{}} className="container">
        <Grid container justify='center' direction='row'>
        <Grid xs={12} md={4} item style={{}} className="author-content">
          <h4 style={{fontSize:35}}>Grey</h4>
          <span>Fullstack Developer</span>
        </Grid>

        <Grid xs={12} md={8} justify='flex-end' container style={{}}>
          <div className='me-container' style={{}}>
          <Image className='me' src={me} width={300} height={300} layout='fixed' />
          </div>
        </Grid>
        </Grid>
        <nav style={{zIndex:1200,marginTop:-40}} className="main-nav" role="navigation">
          <ul className="main-menu">
            <li><a href="#section1">About Me</a></li>
            <li><a href="#section2">What I’m good at</a></li>
            <li><a href="#section3">My Work</a></li>
            <li><a href="#section4">Contact Me</a></li>
          </ul>
          
        </nav>
          
       
        {/* <div className="social-network">
          <ul className="soial-icons">
            <li>
              <a href="https://fb.com/templatemo"><i className="fa fa-facebook" /></a>
            </li>
            <li>
              <a href="#"><i className="fa fa-twitter" /></a>
            </li>
            <li>
              <a href="#"><i className="fa fa-linkedin" /></a>
            </li>
            <li>
              <a href="#"><i className="fa fa-dribbble" /></a>
            </li>
            <li>
              <a href="#"><i className="fa fa-rss" /></a>
            </li>
          </ul>
        </div> */}
        {/* <div className="copyright-text">
          <p>Copyright 2019 greycode technologies</p>
        </div> */}
      </div>
      <RiveComponent className='side-rive' />
    </div>
    
  </div>
        </div>
    )
}

export default Sidebar
