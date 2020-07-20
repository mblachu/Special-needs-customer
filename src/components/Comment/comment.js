import React from 'react';
import './comment.css';

class Comment extends React.Component {

    render() {
        return (
            <div id="comment">

                <div id="original">{this.props.comment.original}<span id="commentId">id: {this.props.comment.id}</span></div>
                <div id="answer" className={this.props.comment.color_patern}>{this.props.comment.answer}</div>
                <div id="tear" className={this.props.comment.color_patern}></div>
                <div id="wish" className={this.props.comment.color_patern}>{this.props.comment.wish}</div>
       
            </div>
        )
    }
}

export default Comment;