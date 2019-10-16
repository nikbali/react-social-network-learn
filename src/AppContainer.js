import {connect} from "react-redux";
import App from "./App";
import {loginActionCreator} from "./redux/currentUserReducer";

const mapStateToProps = (state) => {

        return {
                currentUser: state.currentUser
        }
};

let mapDispatchToProps = (dispatch) => {

        return {
                auth: () => dispatch(loginActionCreator())
        }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);


