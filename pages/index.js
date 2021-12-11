import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Github from '@material-ui/icons/GitHub'
import Front from '../components/front'
import Services from '../components/services'

import {Grid,Paper,Divider} from '@material-ui/core'
import MyFooter from '../components/footer'

import Work from '../components/work.js'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import React,{useEffect,useState,useRef} from 'react'
import Contact from '../components/contact.js'
import {useRive} from 'rive-react'
import me from '../public/me2.png'
import Image from 'next/image'
import { Drawer} from '@mui/material'

import  {
  
 
  DrawerAppContent,

  DrawerContent,
} from '@material/react-drawer';



export default function Home() {

  const [show,setShow]=useState(false)
  const [variant,setVariant]=useState('temporary')
  const [mobile,setMobile]=useState(true)

  const workRef=useRef()
  const serviceRef=useRef()
  const contactRef=useRef()
  const aboutRef=useRef()

  const params = {
    src: '/wave2.riv',
    autoplay: true,
    
  };
  const { RiveComponent, rive } = useRive(params);

  
  useEffect(()=>{
    let width=window.innerWidth
    //let user=Cookie.getJSON('user')
    //console.log(JSON.stringify(slug))
    //console.log(name)
    if(width<500){
      setShow(false)
      setMobile(true)
      
      console.log('mobile view')
     
    }
    else if(width>500){
        setShow(true)
        setMobile(false)
        
        console.log('desktop view')

    }
   
  },[])

  const workScroll = () => {
    
    if(mobile){
       toggleDrawer()
      workRef.current.scrollIntoView()
    }
    else {
      workRef.current.scrollIntoView()
    }
    
  }  
  const serviceScroll = () => {
    if(mobile){
      toggleDrawer()
     serviceRef.current.scrollIntoView()
   }
   else {
     serviceRef.current.scrollIntoView()
   }
  }  
  const contactScroll = () => {
    if(mobile){
      toggleDrawer()
     contactRef.current.scrollIntoView()
   }
   else {
     contactRef.current.scrollIntoView()
   }
    
  }  
  const aboutScroll = ()=> {
    if(mobile){
      toggleDrawer()
     aboutRef.current.scrollIntoView()
   }
   else {
     aboutRef.current.scrollIntoView()
   }
  }  
  


  

  const toggleDrawer=()=>{
    show ? setShow(false) : setShow(true)
  }


  return (
    <div  className=''>
       <Head>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <meta name="description" content />
  <meta name="author" content />
  <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900" rel="stylesheet" />
  <title>Dev by Grey</title>
  {/*
Reflux Template
https://templatemo.com/tm-531-reflux
*/}
  {/* Bootstrap core CSS */}
  
</Head>


<Grid container id="page-wraper">
  {/* Sidebar Menu */}
  
{/* <SideDrawer about={aboutScroll} work={workScroll} service={serviceRef} contact={contactRef} show={show} /> */}

<div style={{}} className='containe main-appba '>
  <Box  sx={{ }}>
      <AppBar className='appbar' style={{height:50,backgroundColor:"rgb(122,122,122)",zIndex:2000}} position="fixed">
        <Toolbar style={{height:50}}>
          {
            !show
            ?
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer}
          >
            <MenuIcon style={{}} />
          </IconButton>
          :
          null
          }
          
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Chidera C.Nadoma
          </Typography> */}
          <p className='app-bar-title' style={{display:'flex'}}>
            Chidera C. Nadoma
          </p>
          <IconButton style={{marginLeft:'auto'}} onClick={contactScroll} color="inherit">
            <Github style={{width:30,height:30,color:'white',marginTop:-10}} />
            </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  </div>

<div>
<Drawer
            anchor={'left'}
            //dismissible
            open={show}
            variant='persistent'
          >
            {/* <Sidebar work={props.work} service={props.service} contact={props.contact} /> */}

            <DrawerContent className='main-drawer'>
            <div className="responsive-nav">
    <i className="fa fa-bars" id="menu-toggl" />
    <div id="menu" style={{borderRight:'7px solid #8c363e',backgroundColor:'rgba(122,122,122)', }} className="menu side-menu">
      
      <div className='side-menu-body'>
      <div style={{}} className="containe side-menu-items">
        <Grid container justify='center' direction='row'>

        {/* <Grid xs={12} md={4} item style={{}} className="author-content">
          <h4 style={{fontSize:35}}>Grey</h4>
          <span>Fullstack Developer</span>
        </Grid> */}

        <Grid xs={12} md={8} justify='flex-end' container style={{}}>
          <div className='me-container' style={{}}>
          <Image className='me' src={me} width={280} height={280} layout='fixed' />
          </div>
        </Grid>
        </Grid>
        <nav style={{zIndex:1200,marginTop:-40}} className="main-nav" role="navigation">
          <ul className="main-menu">
            <li><a onClick={aboutScroll} href="#section1">About me</a></li>
            <li><a onClick={serviceScroll} href="#section2">What i’m good at</a></li>
            <li><a onClick={workScroll} href="#section3">My work</a></li>
            <li><a onClick={contactScroll} href="#section4">Contact me</a></li>
          </ul>
          
        </nav>
          
       
       
      </div>
      <RiveComponent className='side-rive' />
      </div>
    </div>
    
  </div>
            </DrawerContent>

          </Drawer>
</div>

 

  <DrawerAppContent className='drawer-app-content'>
  

  <section style={{}} ref={aboutRef} className='section front'>
    {/* <Button onClick={()=>console.log(mobile)}>
      click
    </Button> */}
    <Front />
  </section>

  <section ref={serviceRef}>
    <Services />
  </section>
  
  <section ref={workRef} className='section' >
    <Work />
  </section>
  
  <section ref={contactRef} className="section contact-me">
    <Contact />
  </section>




  </DrawerAppContent>

  
  

</Grid>


    </div>
  )
}
