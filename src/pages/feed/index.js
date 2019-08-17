import React, { Component } from  'react';
import api from '../../services/api';
import {getToken} from '../../services/auth';
import Button from '../../components/Button';

export default class Feed extends Component {

    state = {
        listImages: [],
        responseInfo: {},
    }
    
    componentDidMount() {
        this.getImages();
    }    

    setCategory = (category) => {
        this.getImages(category);
    }
    
    getImages = async (page="") => {
        try {
            const response = await api.get(`/feed?category=${page}`, {headers: {Authorization: getToken()}})

            this.setState({listImages: response.data.list});

            console.log(page);            

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
                        <li><Button handleclick={this.setCategory} label="Husky"    value="husky"/></li>
                        <li><Button handleclick={this.setCategory} label="Labrador" value="labrador"/></li>
                        <li><Button handleclick={this.setCategory} label="Hound"    value="hound"/></li>
                        <li><Button handleclick={this.setCategory} label="Pug"      value="pug"/></li>
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