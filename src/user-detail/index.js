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
                <p className={classes.title_Name}>Ashutosh Kumar</p>
                <p className={classes.title_Name}>Singh</p>
                <p className={classes.title_Name}>Software Developer</p>
            </div>
            <div className={classes.header_title}>
                <p className={classes.title_Name}><LocationOnIcon />Banguluru,Karnatka</p>
                <p className={classes.title_Name}><LocalPhoneIcon />7982394846</p>
                <p className={classes.title_Name}><EmailIcon />ashutosh051995@gail.com</p>
            </div>
        </div>
        <Divider></Divider>
        <p>Work Experience</p>
        <Grid container spacing={2}>
            {UserDetailConfig.WORK_EXPIRIENCE.map(exp => {
                return (<><Grid item xs={4} className ={classes.exp_company_detail}>
                    <div>{exp.companyName}</div>
                    <div>{exp.location}</div>
                    <div>{exp.startingDuration}-{exp.endingDUration}</div>
                </Grid>
                    <Grid item xs={8} className ={classes.exp_company_detail}>
                        <div>{exp.description.map(point => (<p>{point}</p>))}</div>
                    </Grid></>)
            })}

        </Grid>
        <Divider></Divider>
        <p>Education</p>
        <Grid container spacing={2}>
            {UserDetailConfig.EDUCATIONS.map(exp => {
                return (<><Grid item xs={4} className ={classes.exp_company_detail}>
                    <div>{exp.universityName}</div>
                    <div>{exp.location}</div>
                    <div>{exp.startingDuration}-{exp.endingDUration}</div>
                </Grid>
                    <Grid item xs={8} className ={classes.exp_company_detail}>
                        <p>{exp.detail}</p>
                    </Grid></>)
            })}

        </Grid>

    </>)
}

export default UserDetail