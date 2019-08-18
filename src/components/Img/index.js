import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Lightbox from "react-simple-lightbox";


import './styles.css';

export default class Button extends Component {
 
  render(){
    return (
      <Link to={`/feed?category=${this.props.category}&id=${this.props.id}`}>
          <Lightbox>
              <img id={this.props.id} className="img-bw-4" src={this.props.uri}  alt="{this.props.link}" loading="lazy" width="282pt" height="180pt"/>    
          </Lightbox>
      </Link>

    )
  }
}