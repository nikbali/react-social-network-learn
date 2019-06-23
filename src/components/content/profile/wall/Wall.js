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
    let statePosts = [
        {
            id:"1",
            user:{
                name:"Nikita Balily",
                imageUrl:"https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/34367464_1882986928412512_8081072991393284096_n.jpg?_nc_cat=109&_nc_ht=scontent-frx5-1.xx&oh=2203d1c8f9c0cc086d5601bb71732983&oe=5D8BE22E"
            },
            date:"20 июня 2019",
            text:"Привет мам! Как у Вас дела? Зимой постараюсь прилететь к вам на каникулы с Олей"
        },
        {
            id:"2",
            user:{
                name:"Olga Ananina",
                imageUrl:"https://pp.userapi.com/c846522/v846522151/30751/KFxg8mTsRlk.jpg"
            },
            date:"22 июня 2019",
            text:"Привет, полюбому в гости зимой прилетим)"
        },
        {
            id:"3",
            user:{
                name:"Lubov Dovgal",
                imageUrl:"https://content.foto.my.mail.ru/mail/liubasha160245/_myphoto/i-5.jpg"
            },
            date:"24 июня 2019",
            text:"Привет Насть, я только с дачи приехала, устала как собака, клубники собрала три ведра, жаль Вас нет, кто ее есть то будет?"
        }
    ];

    let posts = statePosts.map(el => <Post user={el.user} date={el.date} text={el.text} />);

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
                        defaultValue="Do you have some new?"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                    />
                    <Button variant="contained" className={classes.button}>
                        send
                    </Button>

                        {posts}

                    </Grid>
                    </Paper>
            </Grid>

    );
};

export default Wall;