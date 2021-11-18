import React,{useState,useEffect} from 'react'
import Image from 'next/image'
import {Grid,Paper,Button} from '@material-ui/core'
import greyscale from '../public/grey.jpeg'



const Front = () => {
    return (
        <div>
            <Grid>
            <Paper className='intro-paper' style={{backgroundColor:'#8c363e'}} elevation={20}>
               {/* <Image layout='intrinsic' width={460} height={325} src={greyscale}  /> */}
                <Grid style={{padding:10}} container>
                    <h2 style={{fontSize:70,fontWeight:'bolder',color:'white',marginLeft:20}}>
                      Greysoft
                    </h2>
                </Grid>
                <Grid style={{padding:30,}} container justify='center'>
                  <h4 style={{marginTop:-80,fontSize:30}}>
                    Where your ideas take the stage
                  </h4>
                </Grid>
            </Paper>
            </Grid>

            <div style={{marginTop:-40}} className="section-heading">
        <h2>About Me</h2>
        <div className="line-dec" />
        <span>The thinest line between professionalism work ethic and product quality is redefined by what i do, its about the impact the product has on the word, and my goal is to make your idea soar higher than it ought to.</span>
      </div>


            
        </div>
    )
}

export default Front
