import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import HomeContainer from './HomeContainer';
import Player from '../components/Player';
import PlayersContainer from './PlayersContainer';
import CommentsContainer from './CommentsContainer';
import Comments from '../components/Comment';
import InfoContainer from './InfoContainer';
import WinningsContainer from './WinningsContainer';
import NavBar from './Navbar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar/>
            <Switch>
              <Route exact path='/' component={HomeContainer}/>
              <Route exact path='/players' component={PlayersContainer} />
              <Route exact path='/players/:id' component={Player} />
              <Route exact path='/comments' component={CommentsContainer} />
              <Route exact path='/comments/:id' component={Comments} />
              <Route exact path='/info' component={InfoContainer} />
              <Route exact path='/winnings' component={WinningsContainer} />
            </Switch>
          </div>
        </Router>  
      </div>
    );
  }
}

export default App;
