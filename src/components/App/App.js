import React from 'react';
import './App.css';
import Toplist from '../Toplist/toplist.js';


let commentsMostFav = [];
let commentsRecent = [];



fetch('http://localhost:9000/api/?sortBy=favourite').then(response => {
    if (response.ok) {
        return response.json();
    } throw new Error('Request failed!');
}, networkError => { console.log(networkError.message) })
    .then(jsonResponse => {
        commentsMostFav = jsonResponse.comments;
        return;
    })

fetch('http://localhost:9000/api?sortBy=recent').then(response => {
    if (response.ok) {
        return response.json();
    } throw new Error('Request failed!');
}, networkError => { console.log(networkError.message) })
    .then(jsonResponse => {
        commentsRecent = jsonResponse.comments;
        return;
    })

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { comments: commentsMostFav}
    
    this.handleSorting = this.handleSorting.bind(this);
    }

    componentDidMount() {


    }

    handleSorting(sort) {
        if (sort !== "recent") {
            this.setState({ comments: commentsMostFav })
        } else {
            this.setState({ comments: commentsRecent })
        }
    }

    render() {
        return (
            <div id="main">
                <header>
                    <h1>Special needs customer</h1>
                </header>
                <Toplist comments={this.state.comments} handleSorting={this.handleSorting}/>
            </div>
        )
    }
};

export default App;
