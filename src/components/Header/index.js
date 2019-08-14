import React from 'react';
import './styles.css';
import {logout} from '../../services/auth';


const Header = () => (
  <header id="main-header">
    IdDog
    <button id="btn" onClick={logout}>Sair</button>
  </header>
);

export default Header;