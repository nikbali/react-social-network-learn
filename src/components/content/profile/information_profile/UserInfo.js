import React from 'react';
import {makeStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import AvatarCustom from "./AvatarCustom";
import Paper from "@material-ui/core/Paper";


const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(3),

    },
    secondaryText:{
        color: theme.palette.text.secondary,
    }
}));


const UserInfo = (props) => {
    const classes = useStyles();
    return (
        <Grid item xs={12}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <AvatarCustom alt={props.currentUser.fullName}
                                      src={props.currentUser.imageUrl}/>
                    </Grid>
                    <Grid item xs={3}>
                        <div><h3>{props.currentUser.fullName}</h3></div>
                        <p/>
                        <div className={classes.secondaryText}>{props.currentUser.age + " years"}</div>
                        <div className={classes.secondaryText}>{props.currentUser.profession}</div>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
};

export default UserInfo;