import React, { Component } from  'react';
import api from '../../services/api';
import {getToken} from '../../services/auth';
import Button from '../../components/Button';
import Img from '../../components/Img';

export default class Feed extends Component {

    state = {
        listImages: [],
        responseInfo: {},
    }
    
    componentDidMount() {
        this.getImages();
    }    

    changeCategory = (category) => {
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
                <div className="container">
                    <div className="nav-menu">
                        <nav>
                            <ul>
                            <li><Button handleclick={this.changeCategory} label="Husky"    value="husky"/></li>
                            <li><Button handleclick={this.changeCategory} label="Labrador" value="labrador"/></li>
                            <li><Button handleclick={this.changeCategory} label="Hound"    value="hound"/></li>
                            <li><Button handleclick={this.changeCategory} label="Pug"      value="pug"/></li>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <div className="row">
                            <div className="column">
                                {this.state.listImages.map((image, index) => (
                                    <Img key={index} link={image}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}