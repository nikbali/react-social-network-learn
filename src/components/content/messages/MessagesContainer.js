import {connect} from "react-redux";
import Messages from "./Messages";

let mapStateToProps = (state) => {
    return {
        selectUserId: 1
    }
};

let mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);