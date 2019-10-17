const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const LOGIN = "LOGIN";


let initialState = {
   
            newPostText: 'Do you have some new?',

            posts: [
                {
                    id:"1",
                    user:{
                        name:"Nikita Balily",
                        imageUrl:"https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/34367464_1882986928412512_8081072991393284096_n.jpg?_nc_cat=109&_nc_ht=scontent-frx5-1.xx&oh=2203d1c8f9c0cc086d5601bb71732983&oe=5D8BE22E"
                    },
                    date:"20 июня 2019 г., 17:41",
                    text:"Привет мам! Как у Вас дела? Зимой постараюсь прилететь к вам на каникулы с Олей"
                },
                {
                    id:"2",
                    user:{
                        name:"Olga Ananina",
                        imageUrl:"https://pp.userapi.com/c846522/v846522151/30751/KFxg8mTsRlk.jpg"
                    },
                    date:"22 июня 2019 г., 11:33",
                    text:"Привет, полюбому в гости зимой прилетим)"
                },
                {
                    id:"3",
                    user:{
                        name:"Lubov Dovgal",
                        imageUrl:"https://content.foto.my.mail.ru/mail/liubasha160245/_myphoto/i-5.jpg"
                    },
                    date:"23 июня 2019 г., 10:00",
                    text:"Привет Насть, я только с дачи приехала, устала как собака, клубники собрала три ведра, жаль Вас нет, кто ее есть то будет?"
                }
            ]
};

const profileReducer = (state = initialState, action) => {

    switch(action.type) {

        case ADD_POST:
            let date = new Date();
            let options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                timezone: 'UTC',
                hour: 'numeric',
                minute: 'numeric',
            };
    
            let newPost = {
                id:"0",
                user:{
                    name: state.currentUser.fullName,
                    imageUrl:state.currentUser.imageUrl
                },
                date:date.toLocaleString("ru", options) ,
                text: state.newPostText
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;

        default:
            return state;

    }
};

export const addPostActionCreator = () => {
    return (
        {
            type: ADD_POST
        }
    );
};

export const updateNewPostTextActionCreator = (text) => {
    return (
        {
            type: UPDATE_NEW_POST_TEXT,
            newText: text
        }
    );
};

export default profileReducer;
