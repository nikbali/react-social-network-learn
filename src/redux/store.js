import { createStore, combineReducers } from "redux";
import profileReducer from "./profileReducer";
import currentUserReducer from "./currentUserReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    currentUser: currentUserReducer
});


let store = createStore(reducers);

export default store;