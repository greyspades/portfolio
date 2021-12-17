import React,{useState} from 'react'
import {Grid,Input,InputAdornment,FormControl,TextField,Button} from '@mui/material'
import { Formik } from 'formik'
import Person from '@material-ui/icons/Person'
import Mail from '@material-ui/icons/Mail'
import { ScaleLoader } from 'react-spinners'
import Check from '@material-ui/icons/Check'
import MyFooter from './footer'
import Axios from 'axios'
import Fade from 'react-reveal/Fade'



const Contact = () => {

    const [loading,setLoading]=useState({
        pending:false,
        done:false
    })
    return (
        <div style={{}} className='contact-container '>
            <div className='contact' style={{backgroundColor:'rgba(0,0,0,0.7)',}}>
                
            <h2 className='contact-header' style={{textAlign:'center',color:'white'}}>
                Contact me
            </h2>

            <Fade bottom>
            <Grid container justifyContent='center'>

<form>
    <Formik initialValues={{sender:'',email:'',message:''}} onSubmit={(item)=>{

        setLoading({
            pending:true,
            done:false
        })
                let data={
                    sender:item.sender,
                    message:item.message,
                    email:item.email
                }
            Axios.post('/api/mail',{data})
            .then((res)=>{
                if(res.data=='SUCCESS'){
                    setLoading({
                        pending:false,
                        done:false
                    })
                    alert('Your message has been sent successfully, I promise to get back to you soon')
                }
            })
            .catch((err)=>{
               if(err){
                console.log(err)
                alert('Could not send message, please check your network connection and try again')
                setLoading({
                    done:false,
                    pending:false
                })
               }
            })
    }}>
        {({handleChange,handleSubmit,values})=>(
            <FormControl>
                  <Grid container justifyContent='center'>
                <Input
                disableUnderline={true}
            className='mail-input'
            placeholder='your name'
            type='text'
            value={values.sender}
            onChange={handleChange('sender')}
            startAdornment={<Person style={{color:'#c62368'}} />}
        />
                </Grid>

                <Grid container justifyContent='center'>
                <Input
                disableUnderline={true}
            className='mail-input'
            placeholder='your Email address'
            type='email'
            value={values.email}
            onChange={handleChange('email')}
            startAdornment={<Person style={{color:'#c62368'}} />}
        />
                </Grid>

                <Grid container justifyContent='center'>
                <TextField
            className='mail-input'
            placeholder='message'
            multiline={true}
            variant='standard'
            id="outlined-multiline-static"
            type='text'
            minRows={8}
            
            value={values.message}
            onChange={handleChange('message')}
            startAdornment={<Mail style={{color:'#c62368'}} />}
        />
                </Grid>

                <Grid container justifyContent='center'>
                    {
                        !loading.done && !loading.pending ?
                        <Button style={{backgroundColor:'#c62368',borderRadius:10,height:40}} onClick={handleSubmit} >
                            <p style={{color:'white'}}>
                                Send
                            </p>
                        </Button>
                        :
                        loading.pending && !loading.done ?
                        <ScaleLoader width={30} height={30} color='#c62368' />
                        :
                        !loading.pending && loading.done ?
                        <Grid container justifyContent='center'>
                            <Check style={{width:60,height:60,color:'#c62368'}} />
                            <p style={{color:'white'}}>
                                Success
                            </p>
                        </Grid>
                        :
                        null
                    }
                </Grid>
            </FormControl>
        )}

    </Formik>
</form>
</Grid>
            </Fade>
            {/* <MyFooter /> */}
        
            </div>
        </div>
    )
}

export default Contact
