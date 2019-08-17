import React, { Component } from 'react';

import './styles.css';

export default class Button extends Component {
  render(){
    return (
      <img src={this.props.link} alt="Mountains" />    
    )
  }
}