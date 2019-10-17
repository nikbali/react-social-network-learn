import React from 'react';
import {connect} from "react-redux";
import {logoutActionCreator} from "../../redux/currentUserReducer";
import Header from "./Header";

let mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            dispatch(logoutActionCreator());
        }
    }
};

const mapStateToProps = (state) => {

    return {
        currentUser: state.currentUser
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);