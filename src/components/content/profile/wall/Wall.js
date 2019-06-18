import React from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Post from "./Post";


const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(3),
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        marginTop: theme.spacing(2),
    },
    button: {
        margin: theme.spacing(1),
    },
}));

const Wall = () => {
    const classes = useStyles();
    return (
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                    <Grid container spacing={2}>

                        <TextField
                        id="outlined-multiline-static"
                        label="New post"
                        multiline
                        rows="4"
                        fullWidth
                        defaultValue="Default Value"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                    />
                    <Button variant="contained" className={classes.button}>
                        send
                    </Button>


                <Post/>
                <Post/>
                <Post/>
                <Post/>
                    </Grid>
                    </Paper>
            </Grid>

    );
};

export default Wall;