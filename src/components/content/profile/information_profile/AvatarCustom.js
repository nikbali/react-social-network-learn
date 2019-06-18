import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import {makeStyles} from "@material-ui/core";


const useStyles = makeStyles({
    avatar: {
        width: 150,
        height: 150,
    },
    small_avatar: {
        width: 50,
        height: 50,
    },
});

const AvatarCustom = (props) => {
    const classes = useStyles();
    return (
        <div>
            <Avatar alt={props.alt}
                    src={props.src}
                    className={classes.avatar} />
        </div>
    );

};

export const SmallAvatarCustom = (props) => {
    const classes = useStyles();
    return (
        <div>
            <Avatar alt={props.alt}
                    src={props.src}
                    className={classes.small_avatar} />
        </div>
    );

};

export default AvatarCustom;