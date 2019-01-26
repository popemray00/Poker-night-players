import React, {component} from 'react';
import { connect } from 'react-redux';

import { updatePlayerFormInfo } from '../actions.PlayerFormAction';
import { createPlayer } from '../actions/PlayerActions';

class PlayerForm extends Component {

    render() {
        const { name, age, img_url, fav_hand } = this.props.PlayerFormInfoReducer;

        return(
            <div className='form'>
                <h2>Add a player to your Poker night!</h2>
                
                <form onsubmit={this.handleOnSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input
                            type=""
                            onChange={this.handleChange}
                            name=""
                            value={}
                        />
                    </div>
                    <div>
                        <label htmlFor="age">Age:</label>
                        <input
                            type=""
                            onChange={this.handleChange}
                            name=""
                            value={}
                        />
                    </div>
                    <div>
                        <label htmlFor="img_url">Image:</label>
                        <input
                            type=""
                            onChange={this.handleChange}
                            name=""
                            value={}
                        />
                    </div>
                    <div>
                        <label htmlFor="fav_hand">Favorite Hand:</label>
                        <input
                            type=""
                            onChange={this.handleChange}
                            name=""
                            value={}
                        />
                    </div>
                </form>
            </div>
        )
    }
}