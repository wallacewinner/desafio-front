import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './styles.css';

export default class Button extends Component {
  alterStyle = () => {
    console.log("ola")
    var NAME = document.getElementById(`${this.props.id}`)
    if(NAME == 1)
    NAME.className="img-selected"
  }

  render(){
    return (
      <Link to={`/feed?category=${this.props.category}&id=${this.props.id}`}>
        <img id={this.props.id} className="img-bw-4" src={this.props.uri}  alt="{this.props.link}" loading="lazy"
        onClick={this.alterStyle}/>    
      </Link>
    )
  }
}