import { Divider } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { Stack } from '@mui/system'
import React from 'react'
import classes from "./userDetail.module.css"
const UserDetail = ()=>{
    return(<>
        <div className={classes.header_container}>
            <div className={classes.header_title} >
                <p className={classes.title_Name}>Ashutosh Kumar</p>
                <p className={classes.title_Name}>Singh</p>
                <p className={classes.title_Name}>Software Developer</p>
            </div>
       <div className={classes.header_title}>
        <p className={classes.title_Name}><LocationOnIcon/>Banguluru,Karnatka</p>
        <p className={classes.title_Name}><LocalPhoneIcon/>7982394846</p>
        <p className={classes.title_Name}><EmailIcon/>ashutosh051995@gail.com</p>
       </div>
     </div>
        <Divider></Divider>
        
    </>)
}

export default UserDetail