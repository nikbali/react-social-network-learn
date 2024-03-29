import React from 'react'
import {makeStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {SmallAvatarCustom} from "../profile/information_profile/AvatarCustom";
import Typography from "@material-ui/core/Typography";
import {Link, NavLink} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    usernameText: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const User = (props) => {
    const classes = useStyles();
    return (

        <Grid container spacing={0.1}>
            <SmallAvatarCustom
                alt={props.user.name}
                src={props.user.imageUrl}/>

            <NavLink to={"/messages/" + props.user.id}>
                <Typography className={classes.usernameText} gutterBottom variant="body2" >
                    {props.user.name}
                </Typography>
           </NavLink>


        </Grid>
    );
};

export default User;
