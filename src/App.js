import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Contactus from './components/Contactus/Contactus';
import Aboutus from './components/Aboutus/Aboutus';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route> 
          <Route exact path="/contactus">
            <Contactus />
          </Route>
          <Route exact path="/aboutus">
            <Aboutus />
          </Route>
          <Route exact path="/Login">
            <Login />
          </Route>          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
