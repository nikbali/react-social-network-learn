import React from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core";
import {SmallAvatarCustom} from "../information_profile/AvatarCustom";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(3),
    },
    button: {
        margin: theme.spacing(3),
    },
    secondaryText:{
        color: theme.palette.text.secondary,
    },
    input: {
        display: 'none',
    },
}));

const Post = (props) => {
    const classes = useStyles();
    return (
                <Grid item xs={12}>
                    <Paper  className={classes.paper}>
                        <Grid container spacing={1}>

                            <Grid item xs={1}>
                                <SmallAvatarCustom
                                    alt={props.user.name}
                                    src={props.user.imageUrl} />
                            </Grid>

                            <Grid item xs={8}>
                                <div><b>{props.user.name} </b></div>
                                <div   className={classes.secondaryText}>{props.date} </div><p/>
                                <div>{props.text} </div>
                            </Grid>

                            <IconButton className={classes.button} aria-label="Delete">
                                <DeleteIcon />
                            </IconButton>
                        </Grid>
                    </Paper>
                </Grid>
    );
};

export default Post;