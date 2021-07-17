import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";

import Login from "./components/Login";
import BubblePage from "./components/BubblePage";
import "./styles.scss";

function App() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    console.log("Logged Out")
  }

  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a onClick={handleLogout}data-testid="logoutButton" href="#">logout</a>
        </header> 


        <Switch>
          <PrivateRoute exact path="/protected" component={BubblePage}/>
          <Route exact path="/login" component={Login} />
        </Switch>  
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to call the logout endpoint, remove the localStorage Item and redirect to the login page.