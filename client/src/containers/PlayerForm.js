import React, {component} from 'react';
import { connect } from 'react-redux';

import { updatePlayerFormInfo } from '../actions.PlayerFormAction';
import { createPlayer } from '../actions/PlayerActions';

class PlayerForm extends Component {

    handleOnChange = e => {
        const {name, value } = e.target;
        const currentFormInfo = Object.assign({}, this.props.PlayerFormInfoReducer, {
            [name]: value
        })
        this.props.updatePlayerFormInfo(currentFormInfo)
    }

    handleOnSubmit = e => {
        e.preventDefault()
        this.props.createPlayer(this.props.PlayerFormInfoReducer)
    }

    render() {
        const { name, age, img_url, fav_hand } = this.props.PlayerFormInfoReducer;

        return(
            <div className='form'>
                <h2>Add a player to your Poker night!</h2>
                
                <form onsubmit={this.handleOnSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            onChange={this.handleOnChange}
                            name="name"
                            value={name}
                        />
                    </div>
                    <div>
                        <label htmlFor="age">Age:</label>
                        <input
                            type="number"
                            onChange={this.handleOnChange}
                            name="age"
                            value={age}
                        />
                    </div>
                    <div>
                        <label htmlFor="img_url">Image:</label>
                        <input
                            type="text"
                            onChange={this.handleOnChange}
                            name="img_url"
                            value={img_url}
                        />
                    </div>
                    <div>
                        <label htmlFor="fav_hand">Favorite Hand:</label>
                        <input
                            type="text"
                            onChange={this.handleOnChange}
                            name="fav_hand"
                            value={fav_hand}
                        />
                    </div>

                    <button type="submit">Add Player</button>
                </form>
            </div>
        )
    }
}