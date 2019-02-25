import React, {Component} from 'react';
import { connect } from 'react-redux';
import PlayerForm from './PlayerForm'
import Player from '../components/Player';
import { getPlayers } from '../actions/PlayerActions';
import './PlayersContainer.css'

class PlayersContainer extends Component {
    // runs after first render method - fetches players
    componentDidMount() {
        this.props.getPlayers()
    }

    render() {
        return(
            <div className='Players-Container'>
                <h1>Poker Players</h1>
                <PlayerForm />
                <div className='player-card'>
                {this.props.players.map(player => <Player key={player.id} player={player}/>)}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        players: state.players.players
        
    })
}

export default connect(mapStateToProps, {getPlayers})(PlayersContainer);