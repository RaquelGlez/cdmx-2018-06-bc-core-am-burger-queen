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
        <nav className="navbar navbar-expand-lg navbar-light navbar-style">
            <div className="navbar-brand">
                <img src={logo} width="74px" alt="logo-burger-queen"/>
            </div>
            <form className="form-inline my-2 my-lg-0">
                <span className="navbar-text">Bienvenid@</span>
            </form>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor03">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <div className="btn-group">
                            <button onClick={this.logout} id="userExit" type="button" className="btn btn-dark" >Salir</button>
                        </div>
                    </li>
                </ul>
            </div>

        </nav>
    );
  }
}
  export default Navbar;