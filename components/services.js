import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import {Grid,Divider,Button} from '@material-ui/core'
import Fade from 'react-reveal/Fade'
import MobileRive from '../components/mobileRive';
//import wave from '../public/wave.riv'
import DesignRive from '../components/designRive'
import PerformanceRive from '../components/performance'
import WebRive from '../components/webRive'
import Image from 'next/image'

function Services(props) {
  const [mobile,setMobile]=useState()

  useEffect(()=>{
    let width=window.innerWidth
    //let user=Cookie.getJSON('user')
    //console.log(JSON.stringify(slug))
    //console.log(name)
    if(width<500){
      setMobile(true)
      
      console.log('mobile view')
     
    }
    else if(width>500){
        setMobile(false)
        
        console.log('desktop view')

    }
   
  },[])

  const params = {
    src: '/wave.riv',
    autoplay: false,
    
  };
  //const { RiveComponent, rive } = useRive(params);
  //const { RiveMobile, mobile } = useRive(params);

  

  
    return (
        <Grid>



<Grid className="sectio service-container" data-section="sectio">
    <div style={{}} className="containe service-grid">
      <div className="section-heading service-heading">
        <h2>What I’m good at?</h2>

        
       
      </div>
     <Fade bottom>
     <Grid  spacing={3} container direction='row' justify='center' className="skill-container">
        
        <Grid style={{}} item md={4} xs={12} className=''>
           <WebRive mobile={mobile} />
        </Grid>

        <Grid item md={4} xs={12} >
            <MobileRive mobile={mobile} />
        </Grid>
        <Grid item md={4} xs={12}>
         <DesignRive mobile={mobile} />
        </Grid>
      
        {/* <Grid item md={6} xs={12}>
          <PerformanceRive mobile={mobile} />
        </Grid> */}


      </Grid>
     </Fade>
      <Grid style={{zIndex:0}} direction='row'  container justify='center'>
          <Grid style={{}}  xs={12} md={6} direction='row' container justify='center'>

            <Fade left>
            <div className='tools'>
              
              <Grid item xs={12} md={12}>
                      <h4 style={{textAlign:'center'}}>
                      Tools of the Trade
                      </h4>
                      {/* <div>
                      <p style={{textAlign:'center',marginBottom:40}}>
                      Technologies and frameworks i work with
                    </p>
                      </div> */}
                      </Grid>
  
                      <Grid item xs={12} md={12}>
                      <Grid  container justify='center' direction='row'>
  
                    <Grid style={{}} xs={4} md={4} container justify='center'>
                    <div className='tool-item service-paper' container justifyContent='center' alignContent='center' >
                  <div >
                  <Image src='/react.png' height={40} width={40} layout='intrinsic' />
                  </div>
                </div>
  
                <Grid justify='center' container>
                  <p style={{marginTop:-5}}>
                  React.js
                  </p>
                </Grid>
                    </Grid>
  
                    <Grid xs={4} md={4} container justify='center'>
                    <div className='tool-item service-paper' container justifyContent='center' alignContent='center' >
                  <div >
                  <Image src='/next.png' height={40} width={40} layout='intrinsic' />
                  </div>
                </div>
  
                <Grid justify='center' container>
                  <p style={{marginTop:-5}}>
                  Next.js
                  </p>
                </Grid>
                    </Grid>
  
                    <Grid xs={4} md={4} container justify='center'>
                    <div className='tool-item service-paper' container justifyContent='center' alignContent='center' >
                  <div >
                  <Image src='/node.png' height={40} width={40} layout='intrinsic' />
                  </div>
                </div>
                <Grid justify='center' container>
                  <p style={{marginTop:-5}}>
                  Node.js
                  </p>
                </Grid>
                    </Grid>
  
                    <Grid xs={4} md={4} container justify='center'>
                    <div className='tool-item service-paper' container justifyContent='center' alignContent='center' >
                  <div >
                  <Image src='/graph.png' height={45} width={40} layout='intrinsic' />
                  </div>
                </div>
  
                <Grid justify='center' container>
                  <p style={{marginTop:-5}}>
                  GraphQl
                  </p>
                </Grid>
                    </Grid>
  
                    <Grid xs={4} md={4} container justify='center'>
                    <div className='tool-item service-paper' container justifyContent='center' alignContent='center' >
                  <div >
                  <Image src='/mongo.png' height={40} width={40} layout='intrinsic' />
                  </div>
                </div>
  
                <Grid justify='center' container>
                  <p style={{marginTop:-5}}>
                  MongoDB
                  </p>
                </Grid>
                    </Grid>
  
                    <Grid xs={4} md={4} container justify='center'>
                    <div className='tool-item service-paper' container justifyContent='center' alignContent='center' >
                  <div >
                  <Image src='/flutter.png' height={40} width={40} layout='intrinsic' />
                  </div>
                </div>
  
                <Grid justify='center' container>
                  <p style={{marginTop:-5}}>
                  Flutter
                  </p>
                </Grid>
                    </Grid>
  
                
              </Grid>
                      </Grid>
  
                      
                    
              
            
              </div>
            </Fade>
          </Grid>


          {/* <Grid justifyContent='center' container xs={12} md={12}>
          <Divider variant='middle' style={{height:2,margin:30,backgroundColor:'#c62368',width:'70%'}} />
          </Grid> */}



          <Grid xs={12} md={6} direction='row' container justify='center'>
            <Fade right>
            <div className='tools'>
              
              <Grid item xs={12} md={12}>
                      <h4 style={{textAlign:'center'}}>
                      What i speak
                      </h4>
                    
                      </Grid>
  
                      <Grid item xs={12} md={12}>
                      <Grid  container justify='center' direction='row'>
  
                    <Grid xs={4} md={4} container justify='center'>
                    <div className='tool-item service-paper' container justifyContent='center' alignContent='center' >
                  <div >
                  <Image src='/html.png' height={40} width={40} layout='intrinsic' />
                  </div>
                </div>
  
                <Grid justify='center' container>
                  <p style={{marginTop:-5}}>
                  HTML
                  </p>
                </Grid>
                    </Grid>
  
                    <Grid xs={4} md={4} container justify='center'>
                    <div className='tool-item service-paper' container justifyContent='center' alignContent='center' >
                  <div >
                  <Image src='/css.png' height={40} width={40} layout='intrinsic' />
                  </div>
                </div>
  
                <Grid justify='center' container>
                  <p style={{marginTop:-5}}>
                  CSS
                  </p>
                </Grid>
                    </Grid>
  
                    <Grid xs={4} md={4} container justify='center'>
                    <div className='tool-item service-paper' container justifyContent='center' alignContent='center' >
                  <div >
                  <Image src='/typescript.png' height={40} width={40} layout='intrinsic' />
                  </div>
                </div>
  
                <Grid justify='center' container>
                  <p style={{marginTop:-5}}>
                  Typescript
                  </p>
                </Grid>
                    </Grid>
  
                    <Grid xs={4} md={4} container justify='center'>
                    <div className='tool-item service-paper' container justifyContent='center' alignContent='center' >
                  <div >
                  <Image src='/python.png' height={40} width={40} layout='intrinsic' />
                  </div>
                </div>
  
                <Grid justify='center' container>
                  <p style={{marginTop:-5}}>
                  Python
                  </p>
                </Grid>
                    </Grid>
  
                    <Grid xs={4} md={4} container justify='center'>
                    <div className='tool-item service-paper' container justifyContent='center' alignContent='center' >
                  <div >
                  <Image src='/java.png' height={60} width={60} layout='intrinsic' />
                  </div>
                </div>
  
                <Grid justify='center' container>
                  <p style={{marginTop:-5}}>
                  Java
                  </p>
                </Grid>
                    </Grid>
  
                    <Grid xs={4} md={4} container justify='center'>
                    <div className='tool-item service-paper' container justifyContent='center' alignContent='center' >
                  <div >
                  <Image src='/dart.png' height={40} width={40} layout='intrinsic' />
                  </div>
                </div>
  
                <Grid justify='center' container>
                  <p style={{marginTop:-5}}>
                  Dart
                  </p>
                </Grid>
                    </Grid>
  
                
              </Grid>
                      </Grid>
  
                      
                     
              
            
              </div>
            </Fade>
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

