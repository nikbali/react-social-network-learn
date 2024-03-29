const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

let initialState = {

    isLogin: false,
    fullName: "Anastasia Dovgal",
    age: "43",
    profession: "Photographer",
    imageUrl: "https://www.gravatar.com/avatar/b8afc3196cf6da4f11f50e7c7cf8a834?s=328&d=identicon&r=PG"
};

const currentUserReducer = (state = initialState, action) => {
    debugger;

    switch(action.type) {

        case LOGIN:
            return {
                ...state,
                isLogin: true
            };

        case LOGOUT:
            return {
                ...state,
                isLogin: false
            };

        default:
            return state;

    }
};

export const loginActionCreator = () =>  ({type: LOGIN});

export const logoutActionCreator = () =>  ({type: LOGOUT});

export default currentUserReducer;
