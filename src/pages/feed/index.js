import React, { Component } from  'react';
import {isAuthenticated} from '../../services/auth';


export default class Feed extends Component {
    
    componentDidMount() {
        if (!isAuthenticated) {
            console.log('nao autenticado');
        }else{
            console.log('autenticado');
            this.getDog;
        }
    }    

    getDog = () => {
        console.log('ok');
    };

    render(){
        return <h1>Feed</h1>;
    }
}