import {connect} from "react-redux";
import Login from "./Login";
import {loginActionCreator} from "../../redux/currentUserReducer";


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

export default connect(mapStateToProps, mapDispatchToProps)(Login);