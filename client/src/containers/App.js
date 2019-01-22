import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './Home';
import NavBar from './Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar/>
            <Switch>
              <Route exact path='/' component={Home}/>
            </Switch>
          </div>
        </Router>  
      </div>
    );
  }
}

export default App;
