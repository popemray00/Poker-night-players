import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import HomeContainer from './HomeContainer';
import PlayersContainer from './PlayersContainer';
import CommentsContainer from './CommentsContainer';
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
              <Route exact path='/' component={HomeContainer}/>
              <Route exact path='/players' component={PlayersContainer} />
              <Route exact path='/comments' component={CommentsContainer} />
              <Route exact path='/info' component={InfoContainer} />
              <Route exact path='/winnings' component={WinningsContainer} />
          </div>
        </Router>  
      </div>
    );
  }
}

export default App;
