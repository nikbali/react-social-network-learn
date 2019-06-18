import React from 'react';

import Navigation from "./components/navbar/Navigation";
import Profile from "./components/content/profile/Profile";
import Header from "./components/header/Header";
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.grid}>
      <Header/>
      <Navigation/>
      <Profile/>
    </div>
  );
}

export default App;
