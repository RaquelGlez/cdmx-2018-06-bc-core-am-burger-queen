import React, { Component } from 'react';
import credentials from '../../credentials/Firebase'
import Navbar from './Navbar'

import './Menu.css';

class Menu extends Component {
   
  
  render() {
    return (
      <div className="menu">
        <div><Navbar/></div>

      </div>
    );
  }
}

export default Menu;
