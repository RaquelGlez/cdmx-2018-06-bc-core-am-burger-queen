import React, { Component } from 'react';
import credentials from '../../credentials/Firebase';


import './ViewMenu.css';

class ViewMenu extends Component {
  constructor(props){
    super(props);
    this.database = credentials.database(); 
    this.handleClickDesayuno = this.handleClickDesayuno.bind(this);
    this.handleClickAlmuerzo = this.handleClickAlmuerzo.bind(this);
    this.state = {
      menus:[],
      desayunos:[],
      almuerzos: []
    };
  }


  handleClickDesayuno () {
        this.database.ref('Desayuno').on('value', snapshot => {
          const desayunos = [];
          snapshot.forEach(item => {
          //console.log((item.val()))
          const desayuno = Object.values(item.val())
          desayunos.push(desayuno)
          //console.log(desayunos)
        })
        this.setState({desayunos})
      })
  }

  handleClickAlmuerzo () {
    this.database.ref('Almuerzo').on('value', snapshot => {
      const almuerzos = [];
      snapshot.forEach(item => {
      console.log((item.val()))
      const almuerzo = Object.values(item.val())
      almuerzos.push(almuerzo)
      console.log(almuerzos)
    })
    this.setState({almuerzos})
  })
}


  
 
  
  render() {
    
    return (
  
      <div className="container">
        <div className="menuContainer text-center"> 
          <button onClick= {this.handleClickDesayuno} className="btn btn-outline-warning mr-4">Desayuno</button>
          <button onClick= {this.handleClickAlmuerzo} className="btn btn-outline-success">Almuerzo-cena</button>
        </div> 
        <div className="desayuno container mt-5">
            {
              this.state.desayunos.map((desayuno, i)=>{
                return (
                  <button key={i} className="btn btn-lg btn-desayuno mr-5 mb-3">{" " + desayuno}</button>
                )
              })
            }
          
        </div>
        <div className="almuerzo container mt-5">
            {
              this.state.almuerzos.map((almuerzo, i)=>{
                return (
                  <button key={i} className="btn btn-lg btn-almuerzo mr-5 mb-3">{" " + almuerzo}</button>
                )
              })
            }
          
        </div>
       </div>
    );
  }
}

export default ViewMenu;
