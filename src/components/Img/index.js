import React, { Component } from 'react';

import './styles.css';

export default class Button extends Component {
  render(){
    return (
      <img className="img-bw-4" src={this.props.link} alt="{this.props.link}" loading="lazy"/>    
    )
  }
}