import React from 'react';
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import classes from "./Navigaton.module.css"
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
}));

const Navigation = () => {

    const c = useStyles();
    return (
        <div className={classes.navbar}>
            <Drawer
                className={classes.drawer}
                variant="permanent"
            >
                <div className={c.toolbar} />
                <List>
                    {['My Profile', 'Messages', 'News', 'Friends'].map((text) => (
                        <ListItem button key={text}>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
    </div>
    );
};

export default Navigation;