import {connect} from "react-redux";
import Main from "./Main";
import {loginActionCreator} from "../redux/currentUserReducer";


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

export default connect(mapStateToProps, mapDispatchToProps)(Main);