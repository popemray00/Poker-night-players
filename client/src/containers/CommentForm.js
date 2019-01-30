import React, {Component} from 'react';
import { connect } from 'react-redux';

import { updatePlayerFormInfo } from '../actions/PlayerFormAction';
import { createPlayers } from '../actions/PlayerActions';

class PlayerForm extends Component {

    handleOnChange = e => {
        const { name, value } = e.target;
        const currentFormInfo = Object.assign({}, this.props.PlayerFormInfoReducer, {
            [name]: value
        })
        this.props.updatePlayerFormInfo(currentFormInfo)
    }

    handleOnSubmit = e => {
        e.preventDefault()
        this.props.createComments(this.props.PlayerFormInfoReducer)
    }

    render() {
        const { content } = this.props.CommentFormReducer;

        return(
            <div className='comment-form'>
                <h2>Add a comment to your Poker night!</h2>
                
                <form onSubmit={this.handleOnSubmit}>
                    <div>
                        <label htmlFor="content">Comment:</label>
                        <input
                            type="text"
                            onChange={this.handleOnChange}
                            name="content"
                            value={content}
                        />
                    </div>
                    

                    <button type="submit">Add Comment</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { PlayerFormInfoReducer: state.PlayerFormInfoReducer }
  }
  
  export default connect(mapStateToProps, {updatePlayerFormInfo, createPlayers})(PlayerForm);