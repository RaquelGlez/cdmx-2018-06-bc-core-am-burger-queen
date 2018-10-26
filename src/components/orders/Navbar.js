import React, { Component } from 'react';
import credentials from '../../credentials/Firebase'

// Assets
import logo from '../../Images/logo.png'
import './Navbar.css';


class Navbar extends Component {
    constructor (props) {
        super(props);
        this.logout = this.logout.bind(this);
    }
    
    
    
    logout(){
        credentials.auth().signOut();
    }

    render() {
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#/">
                <img src={logo} width="70px" alt="logo-burger-queen" className="d-inline-block align-top"/>
            </a>
            <span className="navbar-text mr-auto ml-auto text-center">
                Bienvenid@
            </span>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <div className="navbar-nav ml-auto text-center">
                    <a className="nav-item nav-link" href="#/" onClick={this.logout}>Cerrar sesión</a>
                </div>
            </div>
        </nav> 
    );
  }
}
  export default Navbar;