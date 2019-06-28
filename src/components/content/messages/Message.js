import Grid from  "@material-ui/core/Grid"
import React from 'react'
import {makeStyles} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import {SmallAvatarCustom} from "../profile/information_profile/AvatarCustom";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    messageText: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const Message = (props) => {

    const classes = useStyles();
    return (
        <Grid container spacing={0.1}>
            <SmallAvatarCustom
                alt={props.user.name}
                src={props.user.imageUrl}/>

            <Typography className={classes.messageText} gutterBottom variant="body2" >
                {props.messageText}
            </Typography>
        </Grid>
    );
}

export default Message;