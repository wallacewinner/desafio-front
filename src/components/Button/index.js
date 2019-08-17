import React, { Component } from 'react';
import './styles.css';

export default class Button extends Component {
  render(){
    return (
      <button 
        onClick={() => { this.props.handleclick(this.props.value)}}
        value = {this.props.value}
      >
        {this.props.label}
      </button> 
    )
  }
}