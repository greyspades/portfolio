import React,{useState,useEffect} from 'react'
import Image from 'next/image'
import me from '../public/me2.png'
import {Grid,Paper} from '@material-ui/core'
import Rive,{useRive} from 'rive-react'

const Sidebar = () => {
    return (
        <div >
            <div className="responsive-nav">
    <i className="fa fa-bars" id="menu-toggle" />
    <div id="menu" style={{borderRight:'7px solid #8c363e',backgroundColor:'rgb(128,128,128)' }} className="menu side-menu">
      <i className="fa fa-times" id="menu-close" />
      <div style={{}} className="container">
        <Grid container justify='center' direction='row'>
        <Grid xs={12} md={4} item style={{}} className="author-content">
          <h4 style={{fontSize:35}}>Grey</h4>
          <span>Developer</span>
        </Grid>

        <Grid xs={12} md={8} justify='flex-end' container style={{}}>
          <div style={{width:290,height:290,marginBottom:30}}>
          <Image className='me' src={me} width={350} height={350} layout='fixed' />
          </div>
        </Grid>
        </Grid>
        <nav style={{marginTop:30}} className="main-nav" role="navigation">
          <ul className="main-menu">
            <li><a href="#section1">About Me</a></li>
            <li><a href="#section2">What I’m good at</a></li>
            <li><a href="#section3">My Work</a></li>
            <li><a href="#section4">Contact Me</a></li>
          </ul>
        </nav>
        <div className="social-network">
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
        </div>
        <div className="copyright-text">
          <p>Copyright 2019 greycode technologies</p>
        </div>
      </div>
     
    </div>
  </div>
        </div>
    )
}

export default Sidebar
