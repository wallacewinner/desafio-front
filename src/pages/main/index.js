import React, { Component } from 'react';
import api from '../../services/api';
import {login, isAuthenticated} from '../../services/auth';
import Button from '../../components/Button'

export default class Main extends Component {
    constructor(props){
        super(props);

        this.state = {
            labelText: '',
        };
    }

    state = {
        email: ''
    }

    componentDidMount() {
        if(isAuthenticated())
            window.location.href = '/feed';
    }    


    handleChange = event => {
        this.setState({email: event.target.value});
    }

    teste = () => {
        console.log('teste');
    }

    login = async (event) => {
        event.preventDefault();
        try {
            const response = await api.post('/signup',{ email: this.state.email });
            if (response) {
                login(response.data.user.token);
                window.location.href = '/feed';

            }
                        
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
            <React.Fragment>
                <form onSubmit={this.login} >
                    <input id='email' name='email' onChange={this.handleChange} />
                    <Button handleclick={this.teste} label="Entrar"/>
                </form>
            </React.Fragment>
        )
    }
}