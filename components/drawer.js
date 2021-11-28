import React,{useState,useEffect} from 'react'
import { Drawer } from '@mui/material'
import Sidebar from './sidebar'


const SideDrawer = (props) => {

    const [mobile,setMobile]=useState(true)
    const [variant,setVariant]=useState('permanent')

    return (
        <div>

        <Drawer
            anchor={'left'}
            open={props.show}
            variant='persistent'
           
            // ModalProps={{
            //   keepMounted: true,
              
            // }}
            // onClose={toggleDrawer(anchor, false)}
            // onOpen={toggleDrawer(anchor, true)}
          >
            <Sidebar />
          </Drawer>
            
        </div>
    )
}

export default SideDrawer
