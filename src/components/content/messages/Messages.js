import React from 'react'
import {makeStyles} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import User from "./User";
import Message from "./Message";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    content: {
        gridArea: 'c',
        paddingTop: theme.spacing(10),
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        paddingBottom: theme.spacing(5),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
    button: {
        margin: theme.spacing(1),
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        marginTop: theme.spacing(2),
    }
}));

const users = [
    {
        id: 1,
        name: "Вася Пупкин",
        imageUrl:"https://pp.userapi.com/c636320/v636320213/4def5/NAMu4WNc-W0.jpg",
        messages:["Привет!", "Здарова!"]
    },
    {
        id: 2,
        name: "Гена Жопкин",
        imageUrl:"https://pp.userapi.com/c850732/v850732278/5bf89/k-rvb0DixVI.jpg?ava=1",
        messages:["Привет!", "Здарова!"]
    },  
    {
        id: 3,
        name: "Иван Васильевич",
        imageUrl:"https://pp.userapi.com/c844722/v844722679/1d5d1b/Rgs9rdikZPc.jpg?ava=1",
        messages:["Привет!", "Здарова!"]
    },  
    {
        id: 4,
        name: "Гоша Куценко",
        imageUrl:"https://pp.userapi.com/c837725/v837725777/606c1/SGlVAvmU9SQ.jpg?ava=1",
        messages:["Привет!", "Здарова!"]
    }


];
const Messages = (props) => {
    const classes = useStyles();

    let newMessageElement = React.createRef();
    const onChangeMessageTextField = ()=>{};
    return (
        <div className={classes.content}>
            <Grid container spacing={2} alignItems="stretch">

                <Grid  item xs={3} >
                    <Paper className={classes.paper}>
                        <Grid container direction="column"  >

                            {
                                users.map(user => {
                                    return (<User user={user}/>);
                                })
                            }

                        </Grid>
                    </Paper>
                </Grid>

                <Grid item xs={9} >
                    <Paper className={classes.paper}>
                        <Grid container direction="column">

                            {
                               
                                users
                                .filter(
                                    (user)=>{
                                        return user.id === props.selectUserId
                                })
                                .flatMap(user => {
                                return user.messages.map(
                                    (message) => {
                                        return (<Message user={user} messageText={message}/>);
                                    }
                                );
                                })
                            }
                            <Grid item xs={12} >
                            <TextField
                                    id="outlined-multiline-static"
                                    label="New message"
                                    multiline
                                    rows="4"
                                    fullWidth
                                    inputRef={newMessageElement}
                                    value=""
                                    className={classes.textField}
                                    margin="normal"
                                    variant="outlined"
                                    onChange={onChangeMessageTextField}/>
                                    </Grid>
                            <Grid item xs={6} >
                                <Button className={classes.button}  variant="contained">send</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default Messages;