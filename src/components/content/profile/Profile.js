import React from 'react';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core";
import UserInfo from "./information_profile/UserInfo";
import Wall from "./wall/Wall";


const useStyles = makeStyles(theme => ({
    content: {
        gridArea: 'c',
        padding: 10
    }
}));

const Profile = () => {
    const classes = useStyles();
    return (
        <div className={classes.content}>
            <Grid container spacing={2}>
                <UserInfo/>
                <Wall/>
            </Grid>
        </div>
    );
};

export default Profile;