import React,{useState} from 'react'
import {Grid,Input,InputAdornment,FormControl,TextField} from '@mui/material'
import { Formik } from 'formik'
import Person from '@material-ui/icons/Person'
import Mail from '@material-ui/icons/Mail'


const Contact = () => {
    return (
        <div style={{marginTop:50}} className='container'>
            <h2 style={{textAlign:'center'}}>
                Contact me
            </h2>

            <Grid container justifyContent='center'>

                <form>
                    <Formik initialValues={{sender:'',message:''}} onSubmit={(item)=>{

                    }}>
                        {({handleChange,handleSubmit,values})=>(
                            <FormControl>
                                <Grid container justifyContent='center'>
                                <Input
                            className='mail-input'
                            placeholder='your Email address'

                            value={values.sender}
                            onChange={handleChange('sender')}
                            startAdornment={<Person style={{color:'#c62368'}} />}
                        />
                                </Grid>

                                <Grid container justifyContent='center'>
                                <TextField
                            className='mail-input'
                            placeholder='your Email address'
                            multiline={true}
                            variant='outlined'
                            id="outlined-multiline-static"
                            
                            minRows={8}
                            value={values.sender}
                            onChange={handleChange('sender')}
                            startAdornment={<Mail style={{color:'#c62368'}} />}
                        />
                                </Grid>
                            </FormControl>
                        )}

                    </Formik>
                </form>
            </Grid>
            
        </div>
    )
}

export default Contact
