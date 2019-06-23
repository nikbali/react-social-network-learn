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

const Wall = (props) => {
    const classes = useStyles();
    let posts = props.posts.map(el => <Post user={el.user} date={el.date} text={el.text} />);

    let newPostElement = React.createRef();

    let onChangePostTextField = () => {
        let text = newPostElement.current.value;
        let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text};
        props.dispatch(action)
    };

    let onClickNewPost = () => {
        let action = { type: 'ADD-POST'};
        let text = newPostElement.current.value;
        if(text.trim() !== ''){
            props.dispatch(action)
        }
    };
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
                            inputRef={newPostElement}
                            value={props.newPostText}
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            onChange={onChangePostTextField}/>

                    <Button
                        variant="contained"
                        className={classes.button}
                        onClick={onClickNewPost}>
                        send
                    </Button>
                        {posts}
                    </Grid>
                    </Paper>
            </Grid>

    );
};

export default Wall;