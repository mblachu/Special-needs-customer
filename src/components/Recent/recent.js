import React from 'react';
import './recent.css';
import Comment from '../Comment/comment.js';

class Recent extends React.Component {

    render() {
        return (
            <div id="recent">
                <h1>Recent comments:</h1>
                {this.props.commentsRecent.map(comment => {
                 return <Comment comment={comment} />
                })}
            </div>
        )
    }
}

export default Recent;