import React, { Component } from 'react';
// import firebase from firebase;
import credentials from '../../credentials/Firebase';


import './ViewMenu.css';

class ViewMenu extends Component {
  constructor(props){
    super(props);
    //this.impMenu = this.impMenu.bind(this);
    this.database = credentials.database().ref('menu'); 
    this.state = {
      menus:[
        // {menu: 'Desayuno', menuId:1},
        // {menu: 'Almuerzo-cena', menuId:2 }
      ]
    };
  }



  componentDidMount(){
    this.database.on('value', snapshot => {
      const menus = [];
      snapshot.forEach(item => {
        //console.log(Object.keys(item.val()))
        const menu = Object.keys(item.val())
        menus.push(menu)
        //console.log(menus)
      })
     this.setState({menus})
    })
  }
 
  
  render() {
    //console.log(this.state)
    return (
      
      <div className="container">
        <div className="menuContainer">   
            {
              this.state.menus.map(menu => {
                //console.log(menu)
                return (
                  <button  type="button" className="btn btn-primary btn-lg mr-2">{menu}</button>
                )
              })
            }
        </div> 
       </div>
    );
  }
}

export default ViewMenu;
