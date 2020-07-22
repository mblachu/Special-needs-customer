import React from 'react';
import './form.css';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            original: '',
            answer: '',
            wish: '',
        };
        this.handleOrginal = this.handleOrginal.bind(this);
        this.handleAnswer = this.handleAnswer.bind(this);
        this.handleWish = this.handleWish.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleOrginal(event) {
        this.setState({ original: event.target.value})
    }

    handleAnswer(event) {
        this.setState({ answer: event.target.value })
    }

    handleWish(event) {
        this.setState({ wish: event.target.value })
    }

    handleSubmit() {
        const randomNumber = Math.ceil(Math.random() * 4);
        const colorPatern = `pattern${randomNumber}`;

        fetch('http://localhost:9000/api', {
            method: 'POST', headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ original: this.state.original, answer: this.state.answer, wish: this.state.wish, color_patern: colorPatern })
        });
        this.setState({
            original: '',
            answer: '',
            wish: ''
        });
        this.props.handleFormVisible();
    }


    render() {
        const displayForm = this.props.isVissible === 'yes' ? 'formVisible' : 'formNotVisible';
        return (
            <div className={displayForm} >
                <h2>Add your own 'favourite' customer</h2>               
                <textarea onChange={this.handleOrginal} className="form-message" value={this.state.original} name="originalo" placeholder="Place your original text here"></textarea>
                <textarea onChange={this.handleAnswer} className="form-message" value={this.state.answer} name="answer" placeholder="Place your original answer here"></textarea>
                <textarea onChange={this.handleWish} className="form-message" value={this.state.wish} name="wish" placeholder="Wish to answer goes here"></textarea>
                <button onClick={this.handleSubmit} className="send-button" type="submit">Send your post</button>
            </div>
                            )
    };
};


export default Form;
