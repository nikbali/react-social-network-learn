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
    input: {
        display: 'none',
    },
}));

const Post = () => {
    const classes = useStyles();
    return (
                <Grid item xs={12}>
                    <Paper  className={classes.paper}>
                        <Grid container spacing={1}>

                            <Grid item xs={1}>
                                <SmallAvatarCustom
                                    alt="Anastasia Dovgal"
                                    src="https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/54349907_2279803208730880_1731448707410296832_n.jpg?_nc_cat=106&_nc_ht=scontent-arn2-1.xx&oh=5b13f9ae3045191a94656241b4cc0b8f&oe=5D816359"
                                />
                            </Grid>

                            <Grid item xs={2}>
                                <div><b>Anastasia Dovgal</b></div>
                                <div>20 июня 2019</div><p/>
                                <div>Привет всем!</div>
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