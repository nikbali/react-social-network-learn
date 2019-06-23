import React from 'react';

import Navigation from "./components/navbar/Navigation";
import Profile from "./components/content/profile/Profile";
import Header from "./components/header/Header";
import classes from "./App.module.css";
import {Route} from "react-router-dom";
import Messages from "./components/content/messages/Messages";
import Friends from "./components/content/friends/Friends";
import News from "./components/content/news/News";

const App = (props) => {
  return (
    <div className={classes.grid}>
      <Header/>
      <Navigation/>
        <Route path="/profile" render={
            () => <Profile  profilePage={props.state.profilePage}
                            dispatch={props.dispatch}/>
        }
        />
          <Route path="/messages" render={(props) => <Messages/>}/>
          <Route path="/news" render={(props) => <News/>}/>
          <Route path="/friends" render={(props) => <Friends/>}/>
    </div>
  );
}

export default App;

