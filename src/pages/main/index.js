import React, { Component } from 'react';
import api from '../../services/api';
import {login, getToken} from '../../services/auth';

export default class Main extends Component {
    state = {
        email: '',
        auth: false,
    }

    componentDidMount() {
        console.log (this.state.auth);
    }    

    handleChange = event => {
        this.setState({email: event.target.value});
    }

    login = async (event) => {
        event.preventDefault();
        try {
            const response = await api.post('/signup',{ email: this.state.email });
            if (response) {
                this.setState({auth: true });
                login(response.data.user.token);
            }
            console.log(this.state.auth);
            console.log(getToken());
            
        } catch (error) {
            if (error.response) {
                // Request made and server responded
                console.log(error.response.status);
            }else if (error.request) {
                // The request was made but no response was received
                console.log(error.request);
            }else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
        }
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