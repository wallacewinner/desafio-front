import React, { Component } from 'react';
import './styles.css';
import {logout, isAuthenticated} from '../../services/auth';
import Button from '../Button'

class BtnLogout extends Component {
  render(){
    if(isAuthenticated())
      return <Button handleclick={logout} label="Sair"/>
    else 
      return ""
  }
}

const Header = () => (
  <header id="main-header">
    IdDog
    <BtnLogout />
  </header>
);

export default Header;