import React from 'react';
import {makeStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import AvatarCustom from "./AvatarCustom";
import Paper from "@material-ui/core/Paper";


const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(3),
    },
}));


const UserInfo = (props) => {

    let stateCurrentUser = {
        fullName:"Anastasia Dovgal",
        age:"43",
        profession:"Photographer",
        imageUrl:"https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/54349907_2279803208730880_1731448707410296832_n.jpg?_nc_cat=106&_nc_ht=scontent-arn2-1.xx&oh=5b13f9ae3045191a94656241b4cc0b8f&oe=5D816359"

    };

    const classes = useStyles();
    return (
        <Grid item xs={12}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <AvatarCustom alt={stateCurrentUser.fullName}
                                      src={stateCurrentUser.imageUrl}/>
                    </Grid>
                    <Grid item xs={3}>
                        <div><h3>{stateCurrentUser.fullName}</h3></div>
                        <p/>
                        <div>{stateCurrentUser.age + " years"}</div>
                        <div>{stateCurrentUser.profession}</div>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
};

export default UserInfo;