import React from 'react';
import './comment.css';

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: 1
        };
        this.handleLike = this.handleLike.bind(this);
    }

    componentDidMount() {
        const likesCount = this.props.comment.likes;
        this.setState({ likes: likesCount})
    }

    handleLike() {
        const commentId = this.props.comment.id;
        const newLikesCount = this.props.comment.likes + 1;
        fetch(`http://localhost:9000/api/${commentId}/addlike`, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ likes: newLikesCount })
        })/*.then(response => {
            if (response.ok) {
                return response.json();
            } throw new Error('Request failed!');
        }, networkError => { console.log(networkError.message) })
            .then(jsonresponse => {
                return jsonresponse;
            });*/
        this.setState({ likes: this.state.likes + 1});
        
    }

    render() {
        return (
            <div id="comment">

                <div id="original">{this.props.comment.original}<span id="commentId">id: {this.props.comment.id}</span></div>
                <div id="answer" className={this.props.comment.color_patern}>{this.props.comment.answer}</div>
                <div id="tear" className={this.props.comment.color_patern}></div>
                <div id="wish" className={this.props.comment.color_patern}>
                    {this.props.comment.wish}
                    <div id="like" onClick={this.handleLike}></div>
                    <div>{this.state.likes}</div>
                </div>
             </div>
        )
    }
}

export default Comment;