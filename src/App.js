import React, { Component } from 'react';
import './App.css';
import credentials from './credentials/Firebase'
import Login from './components/login/Login';
import Menu from './components/menu/Menu';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
        user:{},
    }
    this.authListener = this.authListener.bind(this)
  }

  componentDidMount(){
    this.authListener();
  }

  authListener () {
    credentials.auth().onAuthStateChanged((user) => {
        // console.log(user);
      if (user) {
        console.log('existe usuario activo');
        // User is signed in.
        this.setState({ user });
      } else {
        console.log('no existe usuario activo');
      // User is signed out.
      this.setState({ user:null });
      }
    });
  };
  
  
  render() {
    return (
      <div className="App">
        <div>
        {/* <Login/> */}
          {this.state.user ? (<Menu user ={this.state.user}/>) : (<Login/>)}
        </div>
      </div>
    );
  }
}

export default App;
