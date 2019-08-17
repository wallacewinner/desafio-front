import React, { Component } from 'react';
import './styles.css';
import api from '../../services/api';
import {login, isAuthenticated} from '../../services/auth';

export default class Main extends Component {

    state = {
        email: ''
    }

    componentDidMount() {
        if(isAuthenticated())
            window.location.href = '/feed';
    }    


    handleChange = event => {
        this.setState({email: event.target.value}, () => {
            this.login();
        });
    }
    
    login = async () => {
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
                <div className="container">
                    <div className="row">
                        <div className="column">
                            <form onSubmit={this.login} >
                                <input id='email' name='email' onChange={this.handleChange} />
                            </form>
                        </div>
                    </div>
                </div>
             </React.Fragment>
        )
    }
}