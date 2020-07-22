import React from 'react';
import './toplist.css';
import Comment from '../Comment/comment.js';
import Form from '../form/form.js';

class Toplist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sortBy: "recent",
            isVissible: 'no'
        }

        this.handleSortRated = this.handleSortRated.bind(this);
        this.handleSortRecent = this.handleSortRecent.bind(this);
        this.handleAddOwnComment = this.handleAddOwnComment.bind(this);
    }


    handleSortRated() {
        this.props.handleSorting("rated");
    }
    handleSortRecent() {
        this.props.handleSorting("recent");
    }

    handleAddOwnComment() {
        const isVissibleState = this.state.isVissible === 'no' ? 'yes' : 'no';
        this.setState({ isVissible: isVissibleState });
    }

    render() {

        return (
            <div>
                <div id="buttons">
                    <button onClick={this.handleSortRated}>Sort by top rated</button>
                    <button onClick={this.handleSortRecent}>Sort by recent</button>
                    <button onClick={this.handleAddOwnComment}>Add your own comment</button>
                    <Form isVissible={this.state.isVissible} handleFormVisible={this.handleAddOwnComment}/>
                </div>
            <div id="toplist">
                {this.props.comments.map(comment => {
                    return <Comment comment={comment} key={comment.id}/>
                })}
                </div>
            </div>
            )
    }
}

export default Toplist;


/*
 fetch('http://localhost:9000/api', {method: 'POST', headers: { "Content-Type": "application/json" }, body: JSON.stringify({original: 'super dziala', answer: 'answwer dziala', wish: 'wish dziala'})});
 */