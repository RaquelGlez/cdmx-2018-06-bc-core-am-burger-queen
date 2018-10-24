import React, { Component } from 'react';
// import firebase from firebase;
import credentials from '../../credentials/Firebase'
import Navbar from './Navbar'
import ViewMenu from './ViewMenu'
import ResetPass from '../login/ResetPass';

import './Orders.css';

class Orders extends Component {
  constructor(props){
    super(props);

  }
   
  
  render() {
    return (
      <div className="menu">
        <div><Navbar/></div>
        {/* <div><ResetPass/></div> */}
        <div><ViewMenu/></div>
      </div>
    );
  }
}

export default Orders;
