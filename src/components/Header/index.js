import React, { Component } from 'react';
import './styles.css';
import {logout, isAuthenticated} from '../../services/auth';

class BtnLogout extends Component {
  render(){
    if(isAuthenticated())
      return <button id="btn-logout" onClick={logout}>Sair</button>
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