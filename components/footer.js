import React, {useEffect,useState} from 'react'
import Footer from 'rc-footer'
import Rive,{useRive} from 'rive-react'
import {Grid} from '@mui/material'

export default function MyFooter() {

    const [mobile,setMobile]=useState(false);

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
      const { RiveComponent, rive } = useRive(params);


    return (
        <Grid className='footer-container containe'  container justifyContent='center'>

            <Grid style={{backgroundColor:'rgb(122,122,122)'}} className='main-footer work-containe' justifyContent='center' container>
                  <div className=''>
                  <div className='footer-talk'>
                        <div>
                        <p >
                        Developed by Grey
                    </p>
                        </div>
                        <div>
                            <p>
                            2021 All rights reserved
                            </p>
                        </div>
                   </div>
                  </div>
            </Grid>
            
            {/* <Footer
            className='main-footer'
            style={{marginTop:100,marginBottom:-200}}
    columns={[
      {
        icon: (
          <img src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg" />
        ),
        title: '语雀',
        url: 'https://yuque.com',
        description: '知识创作与分享工具',
        openExternal: true,
      },
    ]}
    bottom="Made with ❤️ by AFX"
  />, */}
        </Grid>
    )
}
