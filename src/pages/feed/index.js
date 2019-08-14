import React, { Component } from  'react';
import {getToken, redirectAuth, isAuthenticated} from '../../services/auth';


export default class Feed extends Component {
    state = {
       auth : isAuthenticated()
    }
    
    componentDidMount() {
       redirectAuth();
    }    

    Authenticated = () =>{
        if (this.state.auth) 
            console.log('nope')
    }
    
    render(){
        return (
            <React.Fragment>
                <h1>Feed</h1>
                <input type='text' value={this.state.auth}/>
            </React.Fragment>
            
        )
    }
}