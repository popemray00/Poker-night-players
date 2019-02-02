import React, {Component} from 'react';
import { connect } from 'react-redux';

import { updateCommentForm } from '../actions/CommentFormActions';
import { createComment } from '../actions/CommentActions';

class CommentForm extends Component {

    handleOnChange = e => {
        const { name, value } = e.target;
        const currentFormData = Object.assign({}, this.props.CommentsFormReducer, {
            [name]: value
        })
        this.props.updateCommentForm(currentFormData)
    }

    handleOnSubmit = e => {
        e.preventDefault()
        this.props.createComment(this.props.CommentsFormReducer)
    }

    render() {
        const { content } = this.props.CommentsFormReducer;

        return(
            <div className='comment-form'>
                <h2>Add a comment to your Poker night!</h2>
                
                <form onSubmit={this.handleOnSubmit}>
                    <div>
                        <label htmlFor="comment">Comment:</label>
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
    return { CommentsFormReducer: state.CommentsFormReducer }
  }
  
  export default connect(mapStateToProps, {updateCommentForm, createComment})(CommentForm);