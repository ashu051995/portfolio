import React from "react"
import Avtar from '@mui/material/Avatar/Avatar'
import image from "../assets/img/photo.jpeg"
import classes from './userInfo.module.css'
import Divider from "@mui/material/Divider/Divider"
import { Config } from "./config"
import Grid from '@mui/material/Grid';


const UserInfo = () => {
    return (<>
        <div ><Avtar
            className={classes.profile_photo_container}
            alt="Remy Sharp"
            src={image}
            sx={{ width: 120, height: 120 }}></Avtar>
        </div>
        <p>About Me</p>
        <p>{Config.intro} </p>
        <Divider color="white" />
        <p>Skills</p>

        <Grid container spacing={2}>
            <Grid item xs={6}>
                <div>
                    <p>Language</p>
                    <ol>
                        {Config.language.map(value => <li>{value}</li>)}
                    </ol>
                </div>
            </Grid>
            <Grid item xs={6}>
                <div>
                    <p>frameWork</p>
                    <ol>
                        {Config.frameWork.map(value => <li>{value}</li>)}
                    </ol>
                </div>
            </Grid>
            <Grid item xs={6}>
                <div>
                    <p>Tools</p>
                    <ol>
                        {Config.tools.map(value => <li>{value}</li>)}
                    </ol>
                </div>
            </Grid>
        </Grid>
        <Divider color="white" />
        <p>Strength</p>
        <div>
            <ol>
                {Config.strength.map(value => <li>{value}</li>)}
            </ol>
        </div>
    </>)
}
export default UserInfo