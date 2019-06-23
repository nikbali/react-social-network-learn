import React from 'react'
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    content: {
        gridArea: 'c',
        padding: theme.spacing(10)
    }
}));

const News = () => {
    const classes = useStyles();
    return (
        <div className={classes.content}>
            Новости
        </div>
    );

};

export default News;