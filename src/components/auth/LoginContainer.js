import {connect} from "react-redux";
import Login from "./Login";
import {loginActionCreator} from "../../redux/currentUserReducer";
import {withRouter} from "react-router-dom";


let mapDispatchToProps = (dispatch) => {
    return {
        auth: () => {
            dispatch(loginActionCreator());
        }
    }
};

const mapStateToProps = (state) => {

    return {
        currentUser: state.currentUser
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));