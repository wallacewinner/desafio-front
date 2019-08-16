import React, { Component } from  'react';
import api from '../../services/api';
import {getToken, redirectAuth} from '../../services/auth';

export default class Feed extends Component {

    state = {
        listImages: [],
        responseInfo: {}
    }
    
    componentDidMount() {
       redirectAuth();
       this.getImages();
    }    

    teste = () => {
        console.log ('teste foi!!!');
    }

    getImages = async (page = "husky") => {
        try {
            const response = await api.get(`/feed?category=${page}`, {headers: {Authorization: getToken()}})

            this.setState({listImages: response.data.list});
            this.setState({category: response.data.category});
            //console.log(this.state.listImages);
            
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
                <div>
                    <nav>
                        <ul>
                        <li><button onClick={this.teste}>Pug</button></li>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Contato</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="image-list">
                    {this.state.listImages.map((image, index) => (
                        <h2 key={index}>{image}</h2>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}