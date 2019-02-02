import React, {Component} from 'react';
import { connect } from 'react-redux';
import PlayerForm from './PlayerForm'
import Player from '../components/Player';
import { getPlayers, destroyPlayer } from '../actions/PlayerActions';
import { preFillForm } from '../actions/PlayerFormAction'
import './PlayersContainer.css'

class PlayersContainer extends Component {

    componentDidMount() {
        this.props.getPlayers()
    }

    render() {
        return(
            <div className='Players-Container'>
                <h1>Poker Players</h1>
                <PlayerForm />
                <div className='player-card'>
                {this.props.players.map(player => <Player key={player.id} player={player} destroyPlayer={this.props.destroyPlayer} />)}
                </div>
                <div>{this.props.children}</div>
                {console.log(this.props.players)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        players: state.players.players,
        PlayerFormInfo: state.PlayerFormInfo
    })
}

export default connect(mapStateToProps, {getPlayers, destroyPlayer, preFillForm})(PlayersContainer);