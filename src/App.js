import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Contactus from './components/Contactus/Contactus';
import Aboutus from './components/Aboutus/Aboutus';

function App() {
  return (
    // <div className="App">
    //   <Home />
    // </div>
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
