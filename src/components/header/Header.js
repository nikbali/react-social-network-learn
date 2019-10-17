import React from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const styles = theme => ({
    title: {
        fontSize: 24,
    },
    toolbar: {
        justifyContent: 'space-between',
    },
    left: {
        flex: 1,
    },
    leftLinkActive: {
        color: theme.palette.common.white,
    },
    right: {
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-end',
    },
    rightLink: {
        fontSize: 16,
        color: theme.palette.common.white,
        marginLeft: theme.spacing(3),
    },
    linkSecondary: {
        color: theme.palette.secondary.main,
    },
});

const Header = (props) => {
    const { classes } = props;

    const logout = () => {
        debugger;
        props.logout();
    };

    return (
        <div>
            <AppBar position="fixed">
                <Toolbar className={classes.toolbar}>

                    <Link
                        variant="h6"
                        underline="none"
                        color="inherit"
                        className={classes.title}>

                        {'one_mudak'}
                    </Link>

                    <div className={classes.right}>
                        <Link
                            to="/signup"
                            color="inherit"
                            variant="h6"
                            className={classes.rightLink}
                            onClick={logout}
                        >
                            {'Logout'}
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>
            <div className={classes.placeholder} />
        </div>
    );
};


export default withStyles(styles)(Header);
