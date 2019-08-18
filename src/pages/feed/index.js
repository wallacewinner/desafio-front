import React, { Component } from  'react';
import './styles.css';
import api from '../../services/api';
import {getToken, logout} from '../../services/auth';
import Button from '../../components/Button';
import Img from '../../components/Img';


export default class Feed extends Component {

    state = {
        listImages: [],
        responseInfo: {},
        category: "husky"
    }
    
    componentDidMount() {
        this.Nav();
        this.getImages();
    }    

    changeCategory = (category) => {
            document.getElementById(this.state.category).className="btn";
        this.setState({category}, () => {
            this.getImages(this.state.category);
            document.getElementById(this.state.category).className="btn-active";
        });
       
        
    }

    Nav = () => {
        return(
        <div className="row">
        <div className="column">
            <ul>
                <li><Button handleclick={this.changeCategory} label="Husky"    value="husky"/></li>
                <li><Button handleclick={this.changeCategory} label="Labrador" value="labrador"/></li>
                <li><Button handleclick={this.changeCategory} label="Hound"    value="hound"/></li>
                <li><Button handleclick={this.changeCategory} label="Pug"      value="pug"/></li>
                <li><Button handleclick={logout} label="Sair" value=""/></li>
            </ul>
            </div>
        </div>)
    }

    getImages = async (page="") => {
        try {
            const response = await api.get(`/feed?category=${page}`, {headers: {Authorization: getToken()}})
            this.setState({listImages: response.data.list});
            this.setState({category: response.data.category});
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
                    {this.Nav()}
                    <div>
                        <div className="grid">
                            
                                {this.state.listImages.map((image, index) => (
                                    <div key={index} className="row">
                                    <Img  uri={image} category={this.state.category} id={index}/>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}