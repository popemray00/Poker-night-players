import React, {Component} from 'react';
import Winnings from '../components/Winnings' 
import './WinningsContainer.css'

class WinningsContainer extends Component {
    render () {
        return (
            <div className="game-winnings">
            <Winnings/>
            </div>
        );
    }
}

export default WinningsContainer