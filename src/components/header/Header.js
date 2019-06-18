import React from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import classes from "./Header.module.css";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    }
}));

const Header = () => {
    const style = useStyles();
    return (
        <div className={classes.header}>
            <AppBar position="fixed" className={style.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" noWrap>
                        Social Network
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;