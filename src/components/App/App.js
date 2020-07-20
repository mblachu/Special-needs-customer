import React from 'react';
import './App.css';
import Toplist from '../Toplist/toplist.js';
import Recent from '../Recent/recent.js';
import Form from '../form/form.js';



const comments = [
        {original: "Tekst oryginaly 1",
        answer: "Odpowiedz 1 Odpowiedz 1 Odpowiedz 1 Odpowiedz 1 Odpowiedz 1 Odpowiedz 1 Odpowiedz 1 Odpowiedz 1 Odpowiedz 1 ",
        wish: "Chcialbym odpiwiedziec 1 Chcialbym odpiwiedziec 1 Chcialbym odpiwiedziec 1 Chcialbym odpiwiedziec 1"
    },
    {
        original: "Tekst oryginaly 2",
        answer: "Odpowiedz 2 Odpowiedz 2 Odpowiedz 2 Odpowiedz 2 ",
        wish: "Chcialbym odpiwiedziec 2 odpiwiedziec  odpiwiedziec 2222222 Chcialbym odpiwiedziec 2 odpiwiedziec  odpiwiedziec 2222222"
    }, {
        original: "Tekst oryginaly 3",
        answer: "Odpowiedz 3333 Odpowiedz 3333 333 333 3333 333 333 3333 333 333 ",
        wish: "3333333333  Chcialbym odpiwiedziec odpiwiedziec odpiwiedziecodpiwiedziec odpiwiedziecodpiwiedziecodpiwiedziec odpiwiedziec3"
    }, {
        original: "Tekst oryginaly 4 Tekst oryginaly 4",
        answer: "Odpowiedz 4 Tekst oryginaly 4 Tekst oryginaly 4 Tekst oryginaly 4 Tekst oryginaly 4 Tekst oryginaly 4 Te Tekst oryginaly 4 Tekst oryginaly 4 Tekst oryginaly 4 Tekst oryginaly 4 Tekst oryginaly 4 Te",
        wish: "Chcialbym odpiwiedziec 4"
    }, {
        original: "Tekst oryginaly 5 oryginaly 5 oryginaly 5 ",
        answer: "Odpowiedz 5 Odpowiedz 5 Odpowiedz 5 Odpowiedz 5 Odpowiedz Odpowiedz 5 Odpowiedz Odpowiedz 5 Odpowiedz Odpowiedz 5 Odpowiedz Odpowiedz 5 Odpowiedz ",
        wish: "Chcialbym odpiwiedziec 5 Chcialbym odpiwiedziec 5 odpiwiedziec odpiwiedziec odpiwiedziec odpiwiedziecodpiwiedziecodpiwiedziecodpiwiedziec"
    },
    {
        original: "Tekst oryginaly 1",
        answer: "Odpowiedz 1 Odpowiedz 1 Odpowiedz 1 Odpowiedz 1 Odpowiedz 1 Odpowiedz 1 Odpowiedz 1 Odpowiedz 1 Odpowiedz 1 ",
        wish: "Chcialbym odpiwiedziec 1 Chcialbym odpiwiedziec 1 Chcialbym odpiwiedziec 1 Chcialbym odpiwiedziec 1"
    },
    {
        original: "Tekst oryginaly 2",
        answer: "Odpowiedz 2 Odpowiedz 2 Odpowiedz 2 Odpowiedz 2 ",
        wish: "Chcialbym odpiwiedziec 2 odpiwiedziec  odpiwiedziec 2222222 Chcialbym odpiwiedziec 2 odpiwiedziec  odpiwiedziec 2222222"
    }, {
        original: "Tekst oryginaly 3",
        answer: "Odpowiedz 3333 Odpowiedz 3333 333 333 3333 333 333 3333 333 333 ",
        wish: "3333333333  Chcialbym odpiwiedziec odpiwiedziec odpiwiedziecodpiwiedziec odpiwiedziecodpiwiedziecodpiwiedziec odpiwiedziec3"
    }, {
        original: "Tekst oryginaly 4 Tekst oryginaly 4",
        answer: "Odpowiedz 4 Tekst oryginaly 4 Tekst oryginaly 4 Tekst oryginaly 4 Tekst oryginaly 4 Tekst oryginaly 4 Te Tekst oryginaly 4 Tekst oryginaly 4 Tekst oryginaly 4 Tekst oryginaly 4 Tekst oryginaly 4 Te",
        wish: "Chcialbym odpiwiedziec 4"
    }, {
        original: "Tekst oryginaly 5 oryginaly 5 oryginaly 5 ",
        answer: "Odpowiedz 5 Odpowiedz 5 Odpowiedz 5 Odpowiedz 5 Odpowiedz Odpowiedz 5 Odpowiedz Odpowiedz 5 Odpowiedz Odpowiedz 5 Odpowiedz Odpowiedz 5 Odpowiedz ",
        wish: "Chcialbym odpiwiedziec 5 Chcialbym odpiwiedziec 5 odpiwiedziec odpiwiedziec odpiwiedziec odpiwiedziecodpiwiedziecodpiwiedziecodpiwiedziec"
    }
];

let commentsRecent = [];
const pobieranie = fetch('http://localhost:9000/api').then(response => {
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
        this.state = { comments: comments}
    
    this.handleSorting = this.handleSorting.bind(this);
    }

    handleSorting(sort) {
        if (sort !== "recent") {
            this.setState({ comments: comments })
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
                <Form />
            </div>
        )
    }
};

export default App;
