import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Grid,Divider,Button} from '@mui/material'
import {motion,useAnimation} from 'framer-motion'
import Image from 'next/image'
import Link from '@material-ui/icons/Link'
import Github from '@material-ui/icons/GitHub'
import Code from '@material-ui/icons/Code'
import Fade from 'react-reveal/Fade'

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const control=useAnimation()

  const variants={
    hidden:{},
    visible:{}
  }


  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box className='work-container section' sx={{}}>
      
      {/* <div style={{textAlign:'center'}}>
        <h4 style={{}}>
          What i have created
        </h4>
      </div> */}
      <Grid className='work-header section-heading' container justifyContent='center'>
      <h2  style={{textAlign:'center'}}>
        My Work
      </h2>
      </Grid>
        <Grid container justifyContent='center'>
        <Tabs
       className='work-tabs'
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Web" {...a11yProps(0)} />
          <Tab label="Mobile" {...a11yProps(1)} />
          <Tab label="Design" {...a11yProps(2)} />
        </Tabs>
        </Grid>

        <Fade bottom>
        <Grid container justifyContent='center'>
        
      
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
          style={{}}
          className='my-work'
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Grid  style={{}} spacing={5} container direction='row' justifyContent='center'>
              <Grid style={{}} xs={12} md={4} justifyContent='center' container>
                <div style={{}} className='service-paper work-paper' >
                <Grid container justifyContent='center'>
                        <motion.div style={{borderRadius:10}} whileHover={{scale:1.5}}  className='work-imag'>
                        <Image className='work-image' width={300} height={150} src='/winster.jpg' layout='intrinsic' />
                        </motion.div>
                  </Grid>
  
  
                <div className='work-card-body' >
                <div style={{padding:10,marginTop:-20}}>
                <p style={{fontSize:14}}>
                  Crypto exchange platform
                </p>
                <Divider variant='fullWidth' style={{height:2,backgroundColor:'rgba(255,255,255,0.2)',marginTop:-12,marginBottom:30,marginRight:-10,marginLeft:-10}} />
                </div>
  
                <Grid style={{marginTop:-30}} container direction='row'>
                  <Grid container alignContent='center' xs={3} md={3} style={{margin:10}} >
                        <Code style={{color:'#c62368'}} />     
                  </Grid>
  
                  <Grid xs={9} md={9} style={{paddingLeft:0,paddingRight:0,marginTop:-50,marginLeft:52}} direction='row' container justifyContent='flex-end'>
                        <Grid item xs={3} md={3}>
                        <div className='work-chip' container justifyContent='center' alignContent='center' >
                          <Image src='/react.png' height={20} width={20} layout='intrinsic' />
                        </div>
                        </Grid>
  
                        <Grid item xs={3} md={3}>
                        <div className='work-chip' container justifyContent='center' alignContent='center' >
                          <Image src='/next.png' height={20} width={20} layout='intrinsic' />
                        </div>
                        </Grid>
  
                        <Grid item xs={3} md={3}>
                        <div className='work-chip' container justifyContent='center' alignContent='center' >
                          <Image src='/node.png' height={20} width={20} layout='intrinsic' />
                        </div>
                        </Grid>
  
                        <Grid item xs={3} md={3}>
                        <div className='work-chip' container justifyContent='center' alignContent='center' >
                          <Image src='/mongo.png' height={20} width={20} layout='intrinsic' />
                        </div>
                        </Grid>
                      </Grid>
                </Grid>
  
                <Divider variant='fullWidth' style={{height:2,backgroundColor:'rgba(255,255,255,0.2)',marginTop:-3}} />
                
                <Grid style={{marginTop:10}} container direction='row'>
                  <Grid container xs={3} md={3} style={{margin:10}} >
                        <Link style={{color:' #c62368',marginBottom:-25}} />
                        
                  </Grid>
  
                  <Grid style={{paddingRight:20,marginTop:-10}} container justifyContent='flex-end'>
                        <a style={{fontSize:14}} href='http://winstertradeinvestment.com'>
                        <Button style={{color:'white',backgroundColor:"#c62368",height:23,fontSize:14,paddingTop:5,borderRadius:20}}>
                           <p style={{fontSize:12}}>
                             visit Page
                           </p>
                          </Button>
                        </a>
                  </Grid>
                </Grid>
  
                <Divider variant='fullWidth' style={{height:2,backgroundColor:'rgba(255,255,255,0.2)',marginTop:4}} />
  
                <Grid container direction='row'>
                  <Grid container xs={3} md={3} style={{margin:10}} >
                        <Github style={{color:' #c62368',marginBottom:-35,marginTop:10}} />
                        
                  </Grid>
                 
  
                  <Grid style={{paddingRight:20,}} container justifyContent='flex-end'>
                  <a style={{fontSize:14}} href='https://github.com/greyspades/winster-trade-investment'>
                          <Button style={{color:'white',backgroundColor:"#c62368",height:23,fontSize:14,paddingTop:5,borderRadius:20}}>
                           <p style={{fontSize:12}}>
                             visit Repo
                           </p>
                          </Button>
                          </a>
                  </Grid>
                </Grid>
                </div>
  
                </div>
              </Grid>
  
  
  
  
  
              <Grid style={{}} xs={12} md={4} justifyContent='center' container>
                <div style={{}} className='service-paper work-paper' >
                <Grid container justifyContent='center'>
                        <motion.div whileHover={{scale:1.5}}  className='work-imag'>
                        <Image className='work-image' width={300} height={150} src='/capital.jpg' layout='intrinsic' />
                        </motion.div>
                  </Grid>
  
  
                <div >
                <div style={{padding:10,marginTop:-20}}>
                <p style={{fontSize:14}}>
                  Trading Webapp
                </p>
                <Divider variant='fullWidth' style={{height:2,backgroundColor:'rgba(255,255,255,0.2)',marginTop:-12,marginBottom:30,marginRight:-10,marginLeft:-10}} />
                </div>
  
                <Grid style={{marginTop:-30}} container direction='row'>
                  <Grid container alignContent='center' xs={3} md={3} style={{margin:10}} >
                        <Code style={{color:'#c62368'}} />     
                  </Grid>
  
                  <Grid xs={9} md={9} style={{paddingLeft:0,paddingRight:0,marginTop:-50,marginLeft:52}} direction='row' container justifyContent='flex-end'>
                        <Grid item xs={3} md={3}>
                        <div className='work-chip' container justifyContent='center' alignContent='center' >
                          <Image src='/react.png' height={20} width={20} layout='intrinsic' />
                        </div>
                        </Grid>
  
                        <Grid item xs={3} md={3}>
                        <div className='work-chip' container justifyContent='center' alignContent='center' >
                          <Image src='/graph.png' height={20} width={20} layout='intrinsic' />
                        </div>
                        </Grid>
  
                        <Grid item xs={3} md={3}>
                        <div className='work-chip' container justifyContent='center' alignContent='center' >
                          <Image src='/mongo.png' height={20} width={20} layout='intrinsic' />
                        </div>
                        </Grid>
                      </Grid>
                </Grid>
  
                <Divider variant='fullWidth' style={{height:2,backgroundColor:'rgba(255,255,255,0.2)',marginTop:-3}} />
                
                <Grid style={{marginTop:10}} container direction='row'>
                  <Grid container xs={3} md={3} style={{margin:10}} >
                        <Link style={{color:' #c62368',marginBottom:-25}} />
                        
                  </Grid>
  
                  <Grid style={{paddingRight:20,marginTop:-10}} container justifyContent='flex-end'>
                        <a style={{fontSize:14}} href='http://capitalinvestmentoption'>
                        <Button style={{color:'white',backgroundColor:"#c62368",height:23,fontSize:14,paddingTop:5,borderRadius:20}}>
                           <p style={{fontSize:12}}>
                             visit Page
                           </p>
                          </Button>
                        </a>
                  </Grid>
                </Grid>
  
                <Divider variant='fullWidth' style={{height:2,backgroundColor:'rgba(255,255,255,0.2)',marginTop:4,width:'100%'}} />
  
                <Grid container direction='row'>
                  <Grid container xs={3} md={3} style={{margin:10}} >
                        <Github style={{color:' #c62368',marginBottom:-35,marginTop:10}} />
                        
                  </Grid>
                 
  
                  <Grid style={{paddingRight:20,}} container justifyContent='flex-end'>
                  <a style={{fontSize:14}} href='https://github.com/greyspades/capital'>
                          <Button style={{color:'white',backgroundColor:"#c62368",height:23,fontSize:14,paddingTop:5,borderRadius:20}}>
                           <p style={{fontSize:12}}>
                             visit Repo
                           </p>
                          </Button>
                          </a>
                  </Grid>
                </Grid>
                </div>
  
                </div>
              </Grid>
              
              
              <Grid style={{}} xs={12} md={4} justifyContent='center' container>
                <div style={{}} className='service-paper work-paper' >
                <Grid container justifyContent='center'>
                        <motion.div whileHover={{scale:1.5}}  className='work-imag'>
                        <Image className='work-image' width={300} height={150} src='/dash.jpg' layout='intrinsic' />
                        </motion.div>
                  </Grid>
  
  
                <div >
                <div style={{padding:10,marginTop:-20}}>
                <p style={{fontSize:14}}>
                  Crypto Tracking Dashboard
                </p>
                <Divider variant='fullWidth' style={{height:2,backgroundColor:'rgba(255,255,255,0.2)',marginTop:-12,marginBottom:30,marginRight:-10,marginLeft:-10}} />
                </div>
  
                <Grid style={{marginTop:-30}} container direction='row'>
                  <Grid container alignContent='center' xs={3} md={3} style={{margin:10}} >
                        <Code style={{color:'#c62368'}} />     
                  </Grid>
  
                  <Grid xs={9} md={9} style={{paddingLeft:0,paddingRight:0,marginTop:-50,marginLeft:52}} direction='row' container justifyContent='flex-end'>
                        <Grid item xs={3} md={3}>
                        <div className='work-chip' container justifyContent='center' alignContent='center' >
                          <Image src='/react.png' height={20} width={20} layout='intrinsic' />
                        </div>
                        </Grid>
  
                        <Grid item xs={3} md={3}>
                        <div className='work-chip' container justifyContent='center' alignContent='center' >
                          <Image src='/graph.png' height={20} width={20} layout='intrinsic' />
                        </div>
                        </Grid>
  
                        <Grid item xs={3} md={3}>
                        <div className='work-chip' container justifyContent='center' alignContent='center' >
                          <Image src='/node.png' height={20} width={20} layout='intrinsic' />
                        </div>
                        </Grid>
  
                        <Grid item xs={3} md={3}>
                        <div className='work-chip' container justifyContent='center' alignContent='center' >
                          <Image src='/mongo.png' height={20} width={20} layout='intrinsic' />
                        </div>
                        </Grid>
                      </Grid>
                </Grid>
  
                <Divider variant='fullWidth' style={{height:2,backgroundColor:'rgba(255,255,255,0.2)',marginTop:-3}} />
                
                <Grid style={{marginTop:10}} container direction='row'>
                  <Grid container xs={3} md={3} style={{margin:10}} >
                        <Link style={{color:' #c62368',marginBottom:-25}} />
                        
                  </Grid>
  
                  <Grid style={{paddingRight:20,marginTop:-10}} container justifyContent='flex-end'>
                        <a style={{fontSize:14}} href='http://winstertradeinvestment.com/dashboard/peterpan'>
                        <Button style={{color:'white',backgroundColor:"#c62368",height:23,fontSize:14,paddingTop:5,borderRadius:20}}>
                           <p style={{fontSize:12}}>
                             visit Page
                           </p>
                          </Button>
                        </a>
                  </Grid>
                </Grid>
  
                <Divider variant='fullWidth' style={{height:2,backgroundColor:'rgba(255,255,255,0.2)',marginTop:4}} />
  
                <Grid container direction='row'>
                  <Grid container xs={3} md={3} style={{margin:10}} >
                        <Github style={{color:' #c62368',marginBottom:-35,marginTop:10}} />
                        
                  </Grid>
                 
  
                  <Grid style={{paddingRight:20,}} container justifyContent='flex-end'>
                  <a style={{fontSize:14}} href='https://github.com/greyspades/winster-trade-investment'>
                          <Button style={{color:'white',backgroundColor:"#c62368",height:23,fontSize:14,paddingTop:5,borderRadius:20}}>
                           <p style={{fontSize:12}}>
                             visit Repo
                           </p>
                          </Button>
                          </a>
                  </Grid>
                </Grid>
                </div>
  
                </div>
              </Grid>
  
  
            </Grid>
          </TabPanel>
  
  
  {/* mobile section */}
  
          <TabPanel value={value} index={1} dir={theme.direction}>
           <Grid style={{}} container justifyContent='center' direction='row'>
                <Grid container justifyContent='center' xs={12} md={6}>
                <div className='service-pape work-paper'>
                        <Grid container direction='row'>
                            <Grid container xs={6} md={6}>
                            <motion.div whileHover={{scale:1.4}}  className='work-imag'>
                        <Image className='work-image' width={150} height={250} src='/flicker.jpg' layout='intrinsic' />
                        </motion.div>
                            </Grid>
  
                            <Grid container xs={6} md={6}>
                              <Grid justifyContent='center' container>
                              <motion.div style={{marginTop:-30}} whileHover={{scale:1.7}}  className='work-imag'>
                              <Image width={150} height={150} src='/flicker-icon.png' layout='intrinsic' />
                            </motion.div>
  
                            <p style={{fontSize:14,marginTop:-40,textAlign:'center',}}>
                              Flick meet
                            </p>
                              </Grid>
  
                            <Divider variant='fullWidth' style={{height:2,backgroundColor:'rgba(255,255,255,0.2)',width:'100%'}} />
  
                            <Grid style={{}} direction='row' container justifyContent='flex-end'>
                        <Grid item xs={6} md={6}>
                        <div className='work-chip' container justifyContent='center' alignContent='center' >
                          <Image src='/flutter.png' height={20} width={20} layout='intrinsic' />
                        </div>
                        </Grid>
  
                        <Grid item xs={6} md={6}>
                        <div className='work-chip' container justifyContent='center' alignContent='center' >
                          <Image src='/graph.png' height={20} width={20} layout='intrinsic' />
                        </div>
                        </Grid>
  
                        <Grid item xs={6} md={6}>
                        <div className='work-chip' container justifyContent='center' alignContent='center' >
                          <Image src='/node.png' height={20} width={20} layout='intrinsic' />
                        </div>
                        </Grid>
  
                        <Grid item xs={6} md={6}>
                        <div className='work-chip' container justifyContent='center' alignContent='center' >
                          <Image src='/mongo.png' height={20} width={20} layout='intrinsic' />
                        </div>
                        </Grid>
                      </Grid>
  
                            </Grid>
                            <Divider variant='fullWidth' style={{height:2,backgroundColor:'rgba(255,255,255,0.2)',width:'100%'}} />
  
                <Grid style={{marginTop:10}} container direction='row'>
                  <Grid container xs={3} md={3} style={{margin:10}} >
                        <Image src='/playstore.png' width={30} height={30} layout='fixed' style={{marginBottom:-50}} />
                        
                  </Grid>
  
                  <Grid style={{paddingRight:20,marginTop:-35}} container justifyContent='flex-end'>
                        <a style={{fontSize:14}} href='http://winstertradeinvestment.com'>
                        <Button style={{color:'white',backgroundColor:"#c62368",height:23,fontSize:14,paddingTop:5,borderRadius:20}}>
                           <p style={{fontSize:12}}>
                             visit Page
                           </p>
                          </Button>
                        </a>
                  </Grid>
                  
                </Grid>
  
                <Divider variant='fullWidth' style={{height:2,backgroundColor:'rgba(255,255,255,0.2)',width:'100%',marginTop:-5}} />
  
                <Grid style={{marginTop:-5}} container direction='row'>
                  <Grid container xs={3} md={3} style={{margin:10}} >
                        <Github style={{color:' #c62368',marginBottom:-35,marginTop:10}} />
                        
                  </Grid>
                 
  
                  <Grid style={{paddingRight:20,}} container justifyContent='flex-end'>
                  <a style={{fontSize:14}} href='https://github.com/greyspades/flicker'>
                          <Button style={{color:'white',backgroundColor:"#c62368",height:23,fontSize:14,paddingTop:5,borderRadius:20}}>
                           <p style={{fontSize:12}}>
                             visit Repo
                           </p>
                          </Button>
                          </a>
                  </Grid>
                </Grid>
                        </Grid>
  
                        </div>
                </Grid>
           </Grid>
          </TabPanel>
  
  
  
  
          <TabPanel value={value} index={2} dir={theme.direction}>
            <Grid container justifyContent='center' direction='row'>
            <Grid justifyContent='center' className='design-grid' container xs={12} md={4}>
                  <div className='service-paper'>
                  <div whileHover={{scale:1.4}}  className='work-imag'>
                        <Image width={250} height={350} src='/blu.jfif' layout='intrinsic' />
                        </div>
                  </div>
              </Grid>
  
              <Grid justifyContent='center' className='design-grid' container xs={12} md={4}>
                  <div className='service-paper'>
                  <div whileHover={{scale:1.7}}  className='work-imag'>
                        <Image width={250} height={350} src='/desire.jpg' layout='intrinsic' />
                        </div>
                  </div>
              </Grid>
  
              <Grid justifyContent='center' className='design-grid' container xs={12} md={4}>
                  <div className='service-paper'>
                  <div whileHover={{scale:1.7}}  className='work-imag'>
                        <Image width={250} height={350} src='/flamingo.jpg' layout='intrinsic' />
                        </div>
                  </div>
              </Grid>
            </Grid>
  
          </TabPanel>
        </SwipeableViews>
          </Grid>
        </Fade>
    </Box>
  );
}