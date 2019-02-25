import React, {Component} from 'react';
import { connect } from 'react-redux';
import Comments from '../components/Comment';
import CommentForm from './CommentForm'
import { getComments } from '../actions/CommentActions';
import './CommentsContainer.css'


class CommentsContainer extends Component {

  componentDidMount() {
    this.props.getComments()
}

  render() {
  return(
    <div className='comments-container'>
      <h1>Comments Section</h1>
          <CommentForm/>
            <div className='comment-section'>
              <h2>Comments!!!!</h2>
                <div className='comment'>
                  {this.props.comments.map(comment =>  <Comments key={comment.id} comment={comment}/>)}
                </div>
            </div>
    </div>
  )
}
}
  

const mapStateToProps = (state) => {
  return ({
      comments: state.comments.comments,
  })
}

export default connect(mapStateToProps, {getComments})(CommentsContainer);