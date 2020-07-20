import React from 'react';
import './toplist.css';
import Comment from '../Comment/comment.js';

class Toplist extends React.Component {
    constructor(props) {
        super(props);
        this.state = { sortBy: "recent" }
        this.handleSortRated = this.handleSortRated.bind(this);
        this.handleSortRecent = this.handleSortRecent.bind(this);
    }


    handleSortRated() {
       // this.setState({ sortBy: "rated" });
        this.props.handleSorting("rated");

        fetch('http://localhost:9000/api').then(response => {
            if (response.ok) {
                return response.json();
            } throw new Error('Request failed!');
        }, networkError => { console.log(networkError.message) })
            .then(jsonResponse => {
                console.log(jsonResponse.comments);
                return jsonResponse
            })
    }
    handleSortRecent() {
        //this.setState({ sortBy: "recent" })
        this.props.handleSorting("recent");
    }

    render() {
        return (
            <div>
                <div id="buttons">
                    <button onClick={this.handleSortRated}>Sort by top rated</button>
                    <button onClick={this.handleSortRecent}>Sort by recent</button>
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