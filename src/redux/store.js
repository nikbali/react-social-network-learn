import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import profileReducer from "./profileReducer";
import thunkMiddleware from "redux-thunk";
import currentUserReducer from "./currentUserReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    currentUser: currentUserReducer
});
debugger;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleware)));
window.__store__ = store;

export default store;