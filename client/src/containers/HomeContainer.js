import React, {Component} from 'react';
import Home from '../components/Home' 
import './Home.css'

class HomeContainer extends Component {
    render () {
        return (
            <div className="home-info">
            <Home/>
            </div>
        );
    }
}

export default HomeContainer