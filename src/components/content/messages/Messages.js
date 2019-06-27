import React from 'react'
import {makeStyles} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

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
}));

const Messages = () => {
    const classes = useStyles();
    return (
        <div className={classes.content}>
            <Grid container spacing={2} alignItems="stretch">

                <Grid  item xs={3} >
                    <Paper className={classes.paper}>
                        <Grid container direction="column"  >

                                <Grid item className={classes.paper}>
                                    Вася Пупкин
                                </Grid>
                                <Grid item className={classes.paper}>
                                    Гена Жопкин
                                </Grid>
                                <Grid item className={classes.paper}>
                                    Иван Васильевич
                                </Grid>
                                <Grid item className={classes.paper}>
                                   Гоша Куценко
                                </Grid>
                                <Grid item className={classes.paper}>
                                    Крутой Игорек
                                </Grid>

                        </Grid>
                    </Paper>
                </Grid>

                <Grid item xs={9} >
                    <Paper className={classes.paper}>
                        <Grid container direction="column">

                            <Grid item className={classes.paper}>
                                Привет
                            </Grid>
                            <Grid item className={classes.paper}>
                                Привет)
                            </Grid>
                            <Grid item className={classes.paper}>
                                Как Сам?
                            </Grid>
                            <Grid item className={classes.paper}>
                                Норм.Ты?
                            </Grid>
                            <Grid item className={classes.paper}>
                                Мне пох дым в потолок
                            </Grid>
                            <Grid item className={classes.paper}>
                                Мне пох дым в потолок
                            </Grid>
                            <Grid item className={classes.paper}>
                                Мне пох дым в потолок
                            </Grid>
                            <Grid item className={classes.paper}>
                                Мне пох дым в потолок
                            </Grid>
                            <Grid item className={classes.paper}>
                                Мне пох дым в потолок
                            </Grid>

                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default Messages;