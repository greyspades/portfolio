import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'
import dev from '../public/dev.jpg'
import plan from '../public/plan.jpg'
import code from '../public/code.jpg'
import {Grid,Paper} from '@material-ui/core'
import greyscale from '../public/grey.jpeg'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
//import Anime,{anime} from 'react-anime';
//import ReactAnime from 'react-animejs'
//import dynamic from 'next/dynamic'
import Wavy from '../components/wave'

//const Anime=dynamic(() => import('react-anime'))
//import Wave from 'react-wavify'



const Slider = () => {
  //const {Anime, stagger} = ReactAnime

    return (
        <div>
          <div>
            <Wavy>

            </Wavy>
          </div>
            <Grid container justify='center'>
            <Paper style={{backgroundColor:'#8c363e',width:'90%'}} elevation={20}>
                   {/* <Image layout='intrinsic' width={460} height={325} src={greyscale}  /> */}
                   <Carousel
                   infiniteLoop={true}
                   
                   //renderArrowNext={()=><NavigateNextIcon />}
                   >
                <div style={{width:500,height:500}}>
                <Image layout='fill' src={plan}  />
                    <p style={{fontSize:18}} className="legend">Well planned execution and attention to detail</p>
                </div>
                <div style={{width:500,height:500}}>
                <Image layout='fill' src={dev}  />
                    <p style={{fontSize:18}} className="legend">
                        access to sourcecode and resources which ensure best practices
                    </p>
                </div>
                <div >
                <Image layout='intrinsic' width={460} height={325} src={greyscale}  />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>

                   </Paper>
            </Grid>

            <Grid style={{}} container justify='center ' direction='row' className="left-image-post">
            <Grid item justify='center' xs={12} md={6}>
                <Paper style={{height:'100%'}} elevation={20} className="right-text head-back">
              <h4 style={{marginTop:20}}>Stelar Inovation</h4>
              <p style={{fontSize:18}}>
                Donec tristique feugiat lacus, at sollicitudin nunc euismod
                sed. Mauris viverra, erat non sagittis gravida, elit dui
                mollis ante, sit amet eleifend purus ligula eget eros. Sed
                tincidunt quam vitae neque pharetra dignissim eget ut
                libero.
              </p>
              {/* <Button >
                <div className="my-button">
                <a style={{color:'white',fontSize:14}} href="#">Read More</a>
                </div>
              </Button> */}
            </Paper>
                </Grid>

                <Grid item justify='center' xs={12} md={6}>
                <Paper style={{height:'100%'}} elevation={20} className="right-text head-back">
              <h4 style={{marginTop:20}}>Stelar Inovation</h4>
              <p style={{fontSize:18}}>
                Donec tristique feugiat lacus, at sollicitudin nunc euismod
                sed. Mauris viverra, erat non sagittis gravida, elit dui
                mollis ante, sit amet eleifend purus ligula eget eros. Sed
                tincidunt quam vitae neque pharetra dignissim eget ut
                libero.
              </p>
              {/* <Button >
                <div className="my-button">
                <a style={{color:'white',fontSize:14}} href="#">Read More</a>
                </div>
              </Button> */}
            </Paper>
                </Grid>
                
            </Grid>
        </div>
    )
}

export default Slider
