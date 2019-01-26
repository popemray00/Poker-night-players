import React, {Component} from 'react';
import { connect } from 'react-redux';
import PlayerForm from './PlayerForm'
import Player from '../components/Player';
import { getPlayers, destroyPlayer } from '../actions/PlayerActions';
import { preFillForm } from '../actions/PlayerFormAction'

class PlayersContainer extends Component {

    componentDidMount() {
        this.props.getPlayers()
    }

    render() {
        return(
            <div className='players-container'>
                <div className='App-header'>
                <h1>Poker Players</h1>
                <PlayerForm />
                {this.props.players.map(player => <Player key={player.id} player={player} destroyPlayer={this.props.destroyPlayer} preFillForm={this.props.preFillForm}/>)}
                <div>{this.props.children}</div>
                </div>
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