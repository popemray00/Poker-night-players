import React, {Component} from 'react';
import { connect } from 'react-redux';

import { updatePlayerFormInfo } from '../actions/PlayerFormAction';
import { createPlayers } from '../actions/PlayerActions';

class PlayerForm extends Component {
    // updates while typing
    handleOnChange = e => {
        const { name, value } = e.target;
        const currentFormInfo = Object.assign({}, this.props.PlayerFormInfoReducer, {
            [name]: value
        })
        this.props.updatePlayerFormInfo(currentFormInfo)
    }
    // creates player on submit
    handleOnSubmit = e => {
        e.preventDefault()
        this.props.createPlayers(this.props.PlayerFormInfoReducer)
    }

    render() {
        const { name, age, img_url, fav_hand } = this.props.PlayerFormInfoReducer;

        return(
            <div className='form'>
                <h2>Add a player to your Poker night!</h2>
                
                <form onSubmit={this.handleOnSubmit}>
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
                        <label htmlFor="img_url">Image_URL:</label>
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

const mapStateToProps = state => {
    return { PlayerFormInfoReducer: state.PlayerFormInfoReducer }
  }
  
  export default connect(mapStateToProps, {updatePlayerFormInfo, createPlayers})(PlayerForm);