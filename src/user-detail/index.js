import { Divider } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import Grid from '@mui/material/Grid';
import { UserDetailConfig } from "./config"
import React from 'react'
import classes from "./userDetail.module.css"
const UserDetail = () => {
    return (<>
        <div className={classes.header_container}>
            <div className={classes.header_title} >
                <span className={classes.title_header_Name +' font_header bold'}>ASHUTOSH KUMAR</span>
                <span className={classes.title_header_Name +' font_header bold'}>SINGH</span>
                <span className={classes.title_designation +' font_header bold'}>SOFTWARE DEVELOPER</span>
            </div>
            <div className={classes.header_title}>
                <div className={classes.title_Name +' font_sub_content'}><LocationOnIcon /><span>Banguluru,Karnatka</span></div>
                <div className={classes.title_Name +' font_sub_content'}><LocalPhoneIcon /><span>7982394846</span></div>
                <div className={classes.title_Name +' font_sub_content'}><EmailIcon /><span>ashutosh051995@gail.com</span></div>
            </div>
        </div>
        <Divider style={{marginBottom:'10px'}}></Divider>
        <p className='font_sub_header' style={{marginBottom:"5px"}}>WORK EXPERIENCE</p>
        <Grid container spacing={2} style={{marginBottom:'10px'}} >
            {UserDetailConfig.WORK_EXPIRIENCE.map(exp => {
                return (<><Grid item xs={4} className ={classes.exp_company_detail}>
                    <div className='font_content' style={{fontWeight:600,fontStyle:'italic'}}>{exp.companyName}</div>
                    <div className='font_content'>{exp.location}</div>
                    <div className='font_content'>{exp.startingDuration}-{exp.endingDUration}</div>
                </Grid>
                    <Grid item xs={8} className ={classes.exp_company_detail}>
                        <div>{exp.description.map(point => (<p className='font_content'>{point}</p>))}</div>
                    </Grid></>)
            })}

        </Grid>
        <Divider style={{marginBottom:'10px'}}></Divider>
        <p className='font_sub_header' style={{marginBottom:"5px"}}>EDUCATION</p>
        <Grid container spacing={2}>
            {UserDetailConfig.EDUCATIONS.map(exp => {
                return (<><Grid item xs={4} className ={classes.exp_company_detail}>
                    <div className='font_content' style={{fontWeight:600,fontStyle:'italic'}}>{exp.universityName}</div>
                    <div className='font_content'>{exp.location}</div>
                    <div className='font_content'>{exp.startingDuration}-{exp.endingDUration}</div>
                </Grid>
                    <Grid item xs={8} className ={classes.exp_company_detail}>
                        <p className='font_content'style={{marginBottom:'10px'}}>{exp.detail}</p>
                    </Grid></>)
            })}

        </Grid>

    </>)
}

export default UserDetail