import React, { Component } from 'react';
import './index.css';
import logo from '../../assets/logo.png';
import user from '../../assets/user.png';

class Header extends Component{
  render(){
    return (
    <div id="Header">
      <div><img src={logo} /></div>
      <div id="Perfil">
        <h4>Meu Perfil</h4>
        <img src={user} />
      </div>
    </div>
    )
  }
}

export default Header;