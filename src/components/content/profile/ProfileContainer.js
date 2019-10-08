import {connect} from "react-redux";
import Profile from "./Profile";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },

        updateNewPostText: (newPostText) => {
            dispatch(updateNewPostTextActionCreator(newPostText));
        }

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);