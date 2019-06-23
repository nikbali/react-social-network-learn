import React from 'react';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core";
import UserInfo from "./information_profile/UserInfo";
import Wall from "./wall/Wall";


const useStyles = makeStyles(theme => ({
    content: {
        gridArea: 'c',
        paddingTop: theme.spacing(10),

    }
}));

const Profile = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.content}>
            <Grid container spacing={2}>
                <UserInfo currentUser={props.profilePage.currentUser}/>
                <Wall posts={props.profilePage.posts}
                      newPostText={props.profilePage.newPostText}
                       dispatch = {props.dispatch} />
            </Grid>
        </div>
    );
};

export default Profile;