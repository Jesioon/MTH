import React from 'react';

class Contact extends React.Component{
    state = {
        name: '',
        email: '',
        topic: '',
        message: '',
        errors: {
            nameEmpty: false,
            emailEmpty: false,
            topicEmpty: false,
            messageEmpty: false,
            emailError: false,
        },
    }

    errorMessages = {
        emptyError: "To pole nie może być puste.",
        emailError: "Email musi zawierać znak '@'.",

    }

    formValidation = () => {
        const name = this.state.name;
        const email = this.state.email;
        const topic = this.state.topic;
        const message = this.state.message;

        let nameEmpty = false;
        let emailEmpty = false;
        let topicEmpty = false;
        let messageEmpty = false;
        let emailError = false;
        let allCorrect = true;

        if(!name) nameEmpty = true;
        else nameEmpty = false;
        if(!email) emailEmpty = true;
        else emailEmpty = false;
        if(!topic) topicEmpty = true;
        else topicEmpty = false;
        if(!message) messageEmpty = true;
        else messageEmpty = false;
        if(!email.includes('@')) emailError = true;
        else emailError = false;

        if(nameEmpty || emailEmpty || topicEmpty || messageEmpty || emailError) allCorrect = false;

        if(allCorrect) return 'OK';
        else return {nameEmpty, emailEmpty, topicEmpty, messageEmpty, emailError};

    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = e => {
        const validation = this.formValidation();
        if(validation !== 'OK') {
            e.preventDefault();
            const {nameEmpty, emailEmpty, topicEmpty, messageEmpty, emailError} = validation;
            this.setState({
                errors: {
                    nameEmpty,
                    emailEmpty,
                    topicEmpty,
                    messageEmpty,
                    emailError,
                }
            });
        }
        

    }

    render() {
        return (
            <div className='contact'>
                <h1>skontaktuj się z nami</h1>
                <div className='contactMethods'>
                <section className='contactSection'>
                    <h2>Przez telefon:</h2>
                    <p>+48 665 724 888</p>
                </section>
                <section className='contactSection'>
                    <h2>Przez formularz:</h2>
                <form action='https://formspree.io/f/mdoywoeb' method='POST'>
                    <div className='inputs'>
                    <section>
                    <div>
                    <label htmlFor='name'>Twoje imię: </label>
                    <input id='name' name='name' required value={this.state.name} onChange={this.handleInput}></input>
                    {this.state.errors.nameEmpty && <span className='spanError'>{this.errorMessages.emptyError}</span>}
                    </div>
                    <div>
                    <label htmlFor='email'>Twój email: </label>
                    <input id='email' name='email' required value={this.state.email} onChange={this.handleInput}></input>
                    {this.state.errors.emailError && <span className='spanError'>{this.errorMessages.emailError}</span>}
                    {this.state.errors.emailEmpty && <span className='spanError'>{this.errorMessages.emptyError}</span>}
                    </div>
                    <div>
                    <label htmlFor='topic'>Temat wiadomości: </label>
                    <input id='topic' name='topic' required value={this.state.topic} onChange={this.handleInput}></input>
                    {this.state.errors.topicEmpty && <span className='spanError'>{this.errorMessages.emptyError}</span>}
                    </div>
                    </section>
                    <section>
                        <div>
                    <label htmlFor='message'>Wiadomość: </label>
                    <textarea id='message' name='message' required value={this.state.message} onChange={this.handleInput}></textarea>
                    {this.state.errors.messageEmpty && <span className='spanError'>{this.errorMessages.emptyError}</span>}
                    </div>
                    </section>
                    </div>
                    <button onClick={this.handleSubmit}>Wyślij</button>
                </form>
                </section>
                </div>
            </div>
        )
    }
}

export default Contact;