import React, {Component} from 'react';
import Info from '../components/Info' 
import './InfoContainer.css'

class InfoContainer extends Component {
    render () {
        return (
            <div className="game-info">
            <Info/>
            </div>
        );
    }
}

export default InfoContainer