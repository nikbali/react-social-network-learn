let Store = {
    _state:{
        profilePage:{
            newPostText: 'Do you have some new?',

            currentUser : {
                isLogin:false,
                fullName:"Anastasia Dovgal",
                age:"43",
                profession:"Photographer",
                imageUrl:"https://www.gravatar.com/avatar/b8afc3196cf6da4f11f50e7c7cf8a834?s=328&d=identicon&r=PG"
            },

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
        },
        messagesPage:{},
        newsPage:{},
        friendsPage:{}
    },

    _reRenderDOM(){
        console.log('Call Rerender DOM method!');
    },

    /**
     * Метод добавляет новый в пост в список state.profilePage.posts и обновляет DOM
     * Текст берется из this._state.profilePage.newPostText - текущее значение в поле
     */
    _addPost(){
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
                name: this.getCurrentUser().fullName,
                imageUrl:this.getCurrentUser().imageUrl
            },
            date:date.toLocaleString("ru", options) ,
            text: this._state.profilePage.newPostText
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._reRenderDOM(this._state);
    },

    /**
     * Метод обновляет значение поля this._state.profilePage.newPostText
     */
    _updateNewPostText(newText){
        this._state.profilePage.newPostText = newText;
        debugger;
        this._reRenderDOM(this._state);
    },

    _setIsLogin(){
        this._state.profilePage.currentUser.isLogin = true;
        this._reRenderDOM(this._state);
    },

    /**
     * Метод подписывает объект, который выполняет перерисовку дерева, в нашем случае в index.js
     * @param subscriber ссылка на метод, который перерисоввывает DOM
     */
    subscribeForRerender(subscriber){
        this._reRenderDOM = subscriber;
    },

    /**
     * Возвращает глобальный state
     * @returns {Store._state|{}}
     */
    getState(){
      return this._state;
    },

    getCurrentUser(){
        return this._state.profilePage.currentUser;
    },

    /**
     * Метод в зависимости от переданного объекта action выполняет бизнес логику
     */
    dispatch(action) {
        if (action.type === 'ADD-POST') {
           this._addPost();

        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._updateNewPostText(action.newText);
        }else if (action.type === 'LOGIN') {
            this._setIsLogin();
        }
    }
};

export default Store;
window.store = Store;