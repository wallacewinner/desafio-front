import React, { Component } from  'react';
import api from '../../services/api';
import {getToken} from '../../services/auth';

export default class Feed extends Component {

    state = {
        listImages: [],
        responseInfo: {},
    }
    
    componentDidMount() {
        this.getImages();
    }    

    teste = () => {
        console.log ('teste foi!!!');
    }

    handleChange = event => {
        this.setState({category: event.target.value});
        this.getImages(event.target.value);
    }

    getImages = async (page="") => {
        try {
            const response = await api.get(`/feed?category=${page}`, {headers: {Authorization: getToken()}})

            this.setState({listImages: response.data.list});
            this.setState({category: response.data.category});
            console.log(this.state.category);
            
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
                        <li><button onClick={this.handleChange} value='husky'>Husky</button></li>
                        <li><button onClick={this.handleChange} value='labrador'>Labrador</button></li>
                        <li><button onClick={this.handleChange} value='hound'>Hound</button></li>
                        <li><button onClick={this.handleChange} value='pug'>Pug</button></li>
                        </ul>
                    </nav>
                </div>
                <div className="image-list">
                    {this.state.listImages.map((image, index) => (
                        //<img key={index} src={image} />
                        <input key={index} defaultValue={image} />
                    ))}
                </div>
            </React.Fragment>
        )
    }
}