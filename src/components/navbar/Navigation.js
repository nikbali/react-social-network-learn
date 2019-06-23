import React from 'react';
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import classes from "./Navigaton.module.css"
import {makeStyles} from "@material-ui/core";
import {Link, NavLink} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
}));

const Navigation = () => {

    const c = useStyles();
    let menu = [
        {
            title:'My Profile',
            path:'/profile'
        },
        {
            title:'Messages',
            path:'/messages'
        },
        {
            title:'News',
            path:'/news'
        },
        {
            title:'Friends',
            path:'/friends'
        }
    ];

    return (
        <div className={classes.navbar}>
            <Drawer
                className={classes.drawer}
                variant="permanent"
            >
                <div className={c.toolbar} />
                <List>
                    {menu.map((menu_item) => (

                            <ListItem button key={menu_item.title}>
                                <NavLink to={menu_item.path}>
                                    <ListItemText primary={menu_item.title} />
                                </NavLink>
                            </ListItem>

                    ))}
                </List>
            </Drawer>
    </div>
    );
};

export default Navigation;