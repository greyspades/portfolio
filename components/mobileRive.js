import React,{useEffect,useState} from 'react'
import Rive,{useRive} from 'rive-react'
//import Fade from 'react-reveal'
import {useAnimation,motion} from 'framer-motion'
import {Grid} from '@material-ui/core'

const MobileRive = (props) => {

  const [mobile,setMobile]=useState(false)

   const controls1=useAnimation()
   const controls2=useAnimation()
   const controls3=useAnimation()
   const iconControls=useAnimation()


    const params = {
        src: '/wave.riv',
        autoplay: false,
        
      };
      const { RiveComponent, rive } = useRive(params);
      //const { RiveMobile, mobile } = useRive(params);
      
        const show=()=>{
          rive && rive.play()
          


          if(props.mobile){
            iconControls.start({
              x:230,
             
              transition: { duration: 1,type: "spring", stiffness: 100,},
            })
            controls1.start({
              x:0,
              width:250,
              opacity:1,
              transition: { duration: 0.5,type: "spring", stiffness: 100,},
            })
  
            controls2.start({
              x:0,
              width:250,
              opacity:1,
              transition: { duration: 0.5,type: "spring", stiffness: 100,delay:0.1 },
            })
  
            controls3.start({
              x:0,
              width:250,
              opacity:1,
              transition: { duration: 0.5,type: "spring", stiffness: 100,delay:0.2 },
            })
          }
          else if(!props.mobile){
            iconControls.start({
              x:250,
             
              transition: { duration: 1,type: "spring", stiffness: 100,},
            })
            controls1.start({
              x:0,
              width:250,
              opacity:1,
              transition: { duration: 0.5,type: "spring", stiffness: 100,},
            })
  
            controls2.start({
              x:0,
              width:250,
              opacity:1,
              transition: { duration: 0.5,type: "spring", stiffness: 100,delay:0.1 },
            })
  
            controls3.start({
              x:0,
              width:300,
              opacity:1,
              transition: { duration: 0.5,type: "spring", stiffness: 100,delay:0.2 },
            })
          }
          
        }

        const stop=()=>{
          rive && rive.pause()

          iconControls.start({
            x:0,
           
            transition: { duration: 1,type: "spring", stiffness: 100,},
          })

          controls1.start({
            x:0,
            opacity:0,
            width:1,
           
            transition: { duration: 0.5,type: "spring", stiffness: 100 },
          })

          controls2.start({
            x:100,
            opacity:0,
            width:1,
            
            transition: { duration: 0.5,type: "spring", stiffness: 100 },
          })

          controls3.start({
            x:100,
            opacity:0,
            width:1,
           
            transition: { duration: 0.5,type: "spring", stiffness: 100 },
          })
        }

        const variants={
          visible: { opacity: 1 },
          hidden: { opacity: 0,x:0,width:0 },
        }

    return (
        <Grid container justifyContent='center'>
                      <div 
           style={{position:'relative'}}
           onMouseEnter={show}
            onMouseLeave={stop}
          className="service-item service-paper">
            
          <Grid container direction='row'>
            <Grid item xs={3} md={3}>
            <div className='icon-background'>
            <motion.div animate={iconControls } className=" mobile-icon service-ico" />
            
            </div>
            </Grid>

            <Grid style={{marginTop:-15,marginBottom:30}} direction='row'  container alignItems='center' alignContent='center' justifyContent='flex-start' xs={9} md={9}>
                <Grid item xs={12} md={12}>
                <motion.div
                 variants={variants} initial={'hidden'} 
                 animate={controls1}
                  container alignContent='center' justifyContent='center' className='service-tip'   >
                  <p style={{textAlign:'center',marginTop:-0.01,fontSize:14}}>
                    cross platform Mobile Apps
                  </p>
              </motion.div>
                </Grid>

                {/* <Grid item xs={12} md={12}>
                <motion.div
                 variants={variants} initial={'hidden'} 
                 animate={controls1}
                  container alignContent='center' justifyContent='center' className='service-tip'   >
                  <p style={{textAlign:'center',marginTop:-0.01,fontSize:14}}>
                  Mobile app porting
                  </p>
              </motion.div>
                </Grid> */}

                <Grid item xs={12} md={12}>
                <motion.div
                 variants={variants} initial={'hidden'} 
                 animate={controls1}
                  container alignContent='center' justifyContent='center' className='service-tip'   >
                  <p style={{textAlign:'center',marginTop:-0.01,fontSize:14}}>
                    Wearables And Embedded Software
                  </p>
              </motion.div>
                </Grid>
              
            </Grid>
          </Grid>
              
              <div className='service-talk'>
              <h4 className='service-sub-heading'>
              Mobile Development
            </h4>
            {/* <p>
              Cross-platform mobile applications for android and IOS devices optimized for performance and scalability.
            </p> */}
              </div>
              <div style={{}} className='rive-container' >
              {/* <RiveComponent
              
              // onMouseEnter={() => rive && rive.play()}
              // onMouseLeave={() => rive && rive.pause()}
            /> */}

                <RiveComponent />
              </div>
          </div>
        </Grid>
    )
}

export default MobileRive
