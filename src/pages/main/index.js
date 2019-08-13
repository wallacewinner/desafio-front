import React, { Component } from 'react';
import api from '../../services/api';

export default class Main extends Component {
    state = {
        email: '',
    }

    handleChange = event => {
        this.setState({email: event.target.value});
    }

    login = event => {
        event.preventDefault();

        api.post('/signup',{ email: this.state.email } )
        .then(response => {
            console.log(response);
        })
    };
    
    render(){
        return (
            <form onSubmit={this.login} >
                <input id='email' name='email' onChange={this.handleChange} />

                <input type='submit' value='enviar' />
            </form>
        )
    }
}