import React, { Component } from  'react';
import api from '../../services/api';
import {getToken, redirectAuth} from '../../services/auth';


export default class Feed extends Component {
    state = {
        listImages: []
    }
    
    componentDidMount() {
       redirectAuth();
       this.getImages();
    }    

    getImages = async () => {
        try {
            const response = await api.get('/feed', {headers: {Authorization: getToken()}})
            this.setState({listImages: response});
            console.log(response);
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
    }
    
    render(){
        return (
            <React.Fragment>
                <h1>Feed</h1>
            </React.Fragment>
        )
    }
}