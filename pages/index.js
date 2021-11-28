import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SideDrawer from '../components/drawer'
import Front from '../components/front'
import Services from '../components/services'
import Slider from '../components/slider'
import {Grid,Paper,Divider} from '@material-ui/core'
import Fog from '../components/fog'
import Particles from 'react-tsparticles'
import Work from '../components/work.js'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import React,{useEffect,useState} from 'react'
import Contact from '../components/contact.js'




export default function Home() {

  const [show,setShow]=useState(false)
  const [variant,setVariant]=useState('temporary')

  useEffect(()=>{
    let width=window.innerWidth
    //let user=Cookie.getJSON('user')
    //console.log(JSON.stringify(slug))
    //console.log(name)
    if(width<500){
      setShow(false)
      
      console.log('mobile view')
     
    }
    else if(width>500){
        setShow(true)
        
        console.log('desktop view')

    }
   
  },[])

  const toggleDrawer=()=>{
    mobile ? setMobile(false) : setMobile(true)
  }


  return (
    <div className=''>
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
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
  {/* Additional CSS Files */}
  <link rel="stylesheet" href="assets/css/fontawesome.css" />
  <link rel="stylesheet" href="assets/css/templatemo-style.css" />
  <link rel="stylesheet" href="assets/css/owl.css" />
  <link rel="stylesheet" href="assets/css/lightbox.css" />

  <script src='../components.custom.js'>

  </script>
</Head>


<Grid container id="page-wraper">
  {/* Sidebar Menu */}

  <Particles
className='particles'
canvasClassName='particle-canvas'
    params={
      {
        "autoPlay": true,
        "background": {
          // "color": {
          //   "value": "#232741"
          // },
          // "image": "url('http://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1237px-NASA_logo.svg.png')",
          // "position": "50% 50%",
          // "repeat": "no-repeat",
          // "size": "20%",
          //"opacity": 1
        },
        // "backgroundMask": {
        //   "composite": "destination-out",
        //   "cover": {
        //     "color": {
        //       "value": "#fff"
        //     },
        //     "opacity": 1
        //   },
        //   "enable": false
        // },
        "fullScreen": {
          "enable": true,
          "zIndex": 1
        },
        "detectRetina": true,
        "duration": 0,
        "fpsLimit": 60,
        "interactivity": {
          "detectsOn": "canvas",
          "events": {
            "onClick": {
              "enable": true,
              "mode": "repulse"
            },
            "onDiv": {
              "selectors": [],
              "enable": false,
              "mode": [],
              "type": "circle"
            },
            "onHover": {
              "enable": true,
              "mode": "bubble",
              "parallax": {
                "enable": false,
                "force": 2,
                "smooth": 10
              }
            },
            "resize": true
          },
          "modes": {
            "attract": {
              "distance": 200,
              "duration": 0.4,
              "easing": "ease-out-quad",
              "factor": 1,
              "maxSpeed": 50,
              "speed": 1
            },
            "bounce": {
              "distance": 200
            },
            "bubble": {
              "distance": 250,
              "duration": 2,
              "mix": false,
              "opacity": 0,
              "size": 0
            },
            "connect": {
              "distance": 80,
              "links": {
                "opacity": 0.5
              },
              "radius": 60
            },
            "grab": {
              "distance": 400,
              "links": {
                "blink": false,
                "consent": false,
                "opacity": 1
              }
            },
            "light": {
              "area": {
                "gradient": {
                  "start": {
                    "value": "#ffffff"
                  },
                  "stop": {
                    "value": "#000000"
                  }
                },
                "radius": 1000
              },
              "shadow": {
                "color": {
                  "value": "#000000"
                },
                "length": 2000
              }
            },
            "push": {
              "default": true,
              "groups": [],
              "quantity": 4
            },
            "remove": {
              "quantity": 2
            },
            "repulse": {
              "distance": 400,
              "duration": 0.4,
              "factor": 100,
              "speed": 1,
              "maxSpeed": 50,
              "easing": "ease-out-quad"
            },
            "slow": {
              "factor": 3,
              "radius": 200
            },
            "trail": {
              "delay": 1,
              "pauseOnStop": false,
              "quantity": 1
            }
          }
        },
        "manualParticles": [],
        "motion": {
          "disable": false,
          "reduce": {
            "factor": 4,
            "value": true
          }
        },
        "particles": {
          "bounce": {
            "horizontal": {
              "random": {
                "enable": false,
                "minimumValue": 0.1
              },
              "value": 1
            },
            "vertical": {
              "random": {
                "enable": false,
                "minimumValue": 0.1
              },
              "value": 1
            }
          },
          "collisions": {
            "bounce": {
              "horizontal": {
                "random": {
                  "enable": false,
                  "minimumValue": 0.1
                },
                "value": 1
              },
              "vertical": {
                "random": {
                  "enable": false,
                  "minimumValue": 0.1
                },
                "value": 1
              }
            },
            "enable": false,
            "mode": "bounce",
            "overlap": {
              "enable": true,
              "retries": 0
            }
          },
          "color": {
            "value": "#c62368",
            "animation": {
              "h": {
                "count": 0,
                "enable": false,
                "offset": 0,
                "speed": 1,
                "sync": true
              },
              "s": {
                "count": 0,
                "enable": false,
                "offset": 0,
                "speed": 1,
                "sync": true
              },
              "l": {
                "count": 0,
                "enable": false,
                "offset": 0,
                "speed": 1,
                "sync": true
              }
            }
          },
          "destroy": {
            "mode": "none",
            "split": {
              "count": 1,
              "factor": {
                "random": {
                  "enable": false,
                  "minimumValue": 0
                },
                "value": 3
              },
              "rate": {
                "random": {
                  "enable": false,
                  "minimumValue": 0
                },
                "value": {
                  "min": 4,
                  "max": 9
                }
              },
              "sizeOffset": true
            }
          },
          "groups": {},
          "life": {
            "count": 0,
            "delay": {
              "random": {
                "enable": false,
                "minimumValue": 0
              },
              "value": 0,
              "sync": false
            },
            "duration": {
              "random": {
                "enable": false,
                "minimumValue": 0.0001
              },
              "value": 0,
              "sync": false
            }
          },
          "links": {
            "blink": false,
            "color": {
              "value": "#ffffff"
            },
            "consent": false,
            "distance": 150,
            "enable": false,
            "frequency": 1,
            "opacity": 0.4,
            "shadow": {
              "blur": 5,
              "color": {
                "value": "#00ff00"
              },
              "enable": false
            },
            "triangles": {
              "enable": false,
              "frequency": 1
            },
            "width": 1,
            "warp": false
          },
          "move": {
            "angle": {
              "offset": 0,
              "value": 90
            },
            "attract": {
              "distance": 200,
              "enable": false,
              "rotate": {
                "x": 600,
                "y": 600
              }
            },
            "decay": 0,
            "distance": {},
            "direction": "none",
            "drift": 0,
            "enable": true,
            "gravity": {
              "acceleration": 9.81,
              "enable": false,
              "inverse": false,
              "maxSpeed": 50
            },
            "path": {
              "clamp": true,
              "delay": {
                "random": {
                  "enable": false,
                  "minimumValue": 0
                },
                "value": 0
              },
              "enable": false
            },
            "outModes": {
              "default": "out",
              "bottom": "out",
              "left": "out",
              "right": "out",
              "top": "out"
            },
            "random": true,
            "size": false,
            "speed": 1,
            "spin": {
              "acceleration": 0,
              "enable": false
            },
            "straight": false,
            "trail": {
              "enable": false,
              "length": 10,
              "fillColor": {
                "value": "#000000"
              }
            },
            "vibrate": false,
            "warp": false
          },
          "number": {
            "density": {
              "enable": true,
              "area": 800,
              "factor": 1000
            },
            "limit": 0,
            "value": 160
          },
          "opacity": {
            "random": {
              "enable": true,
              "minimumValue": 0.1
            },
            "value": {
              "min": 0,
              "max": 1
            },
            "animation": {
              "count": 0,
              "enable": true,
              "speed": 1,
              "sync": false,
              "destroy": "none",
              "minimumValue": 0,
              "startValue": "random"
            }
          },
          "orbit": {
            "animation": {
              "count": 0,
              "enable": false,
              "speed": 1,
              "sync": false
            },
            "enable": false,
            "opacity": 1,
            "rotation": {
              "random": {
                "enable": false,
                "minimumValue": 0
              },
              "value": 45
            },
            "width": 1
          },
          "reduceDuplicates": false,
          "repulse": {
            "random": {
              "enable": false,
              "minimumValue": 0
            },
            "value": 0,
            "enabled": false,
            "distance": 1,
            "duration": 1,
            "factor": 1,
            "speed": 1
          },
          "roll": {
            "darken": {
              "enable": false,
              "value": 0
            },
            "enable": false,
            "enlighten": {
              "enable": false,
              "value": 0
            },
            "speed": 25
          },
          "rotate": {
            "random": {
              "enable": false,
              "minimumValue": 0
            },
            "value": 0,
            "animation": {
              "enable": false,
              "speed": 0,
              "sync": false
            },
            "direction": "clockwise",
            "path": false
          },
          "shadow": {
            "blur": 0,
            "color": {
              "value": "#000000"
            },
            "enable": false,
            "offset": {
              "x": 0,
              "y": 0
            }
          },
          "shape": {
            "options": {},
            "type": "circle"
          },
          "size": {
            "random": {
              "enable": true,
              "minimumValue": 1
            },
            "value": {
              "min": 1,
              "max": 3
            },
            "animation": {
              "count": 0,
              "enable": false,
              "speed": 4,
              "sync": false,
              "destroy": "none",
              "minimumValue": 0.3,
              "startValue": "random"
            }
          },
          "stroke": {
            "width": 0
          },
          "tilt": {
            "random": {
              "enable": false,
              "minimumValue": 0
            },
            "value": 0,
            "animation": {
              "enable": false,
              "speed": 0,
              "sync": false
            },
            "direction": "clockwise",
            "enable": false
          },
          "twinkle": {
            "lines": {
              "enable": false,
              "frequency": 0.05,
              "opacity": 1
            },
            "particles": {
              "enable": false,
              "frequency": 0.05,
              "opacity": 1
            }
          },
          "wobble": {
            "distance": 5,
            "enable": false,
            "speed": 50
          },
          "zIndex": {
            "random": {
              "enable": false,
              "minimumValue": 0
            },
            "value": 0,
            "opacityRate": 1,
            "sizeRate": 1,
            "velocityRate": 1
          }
        },
        "pauseOnBlur": true,
        "pauseOnOutsideViewport": true,
        "responsive": [],
        "themes": []
      }
	    }
	/>


  {/* <div style={{width:'100%'}} className='section main-appbar'>
  <Box  sx={{ }}>
      <AppBar style={{height:50}} position="static">
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
            <MenuIcon />
          </IconButton>
          :
          null
          }
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  </div> */}

  
<SideDrawer show={show} />

  {/* <section className="section about-me" data-section="section1">
    <div className="containe">
     

     
    
      
    </div>
  </section> */}


  <section>
    <Services />
  </section>
  
  <section className='section' >
    <Work />
  </section>
  
  <section className="section contact-me" data-section="section4">
    <Contact />
  </section>
</Grid>


    </div>
  )
}
