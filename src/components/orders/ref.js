// handleClickDesayuno = (e) => {
//     console.log(this.state.menus[0]);
//     //console.log(this.state.menus[1]);
//     const menuDesayuno = this.state.menus[0];
//     if(menuDesayuno == true){
//         const Desayunos = [];
//         this.database.on('child_added', snapshot => {
//         snapshot.forEach(item => {
//           console.log(Object.values(item.val()))
//         })
//       })
//     } else {
//       alert('es el almuerzo')
//     }  
//   }

//   onClick = {()=>this.handleClickDesayuno()}


// import React, { Component } from 'react';
// // import firebase from firebase;
// import credentials from '../../credentials/Firebase';


// import './ViewMenu.css';

// class ViewMenu extends Component {
//   constructor(props){
//     super(props);
//     this.database = credentials.database().ref('menu'); 
//     this.handleClickDesayuno = this.handleClickDesayuno.bind(this);
//     this.handleClickAlmuerzo = this.handleClickAlmuerzo.bind(this);
//     this.state = {
//       isMenuIn: false,
//       menus:[],
//       Desayunos:[],
//       Almuerzos: []
//     };
//   }



//   componentDidMount(){
//     this.database.on('value', snapshot => {
//       const menus = [];
//       snapshot.forEach(item => {
//         //console.log(Object(item.val()))
//         const menu = Object.keys(item.val())
//         menus.push(menu)
//         //console.log(menus)
//       })
//      this.setState({menus})
//     })
//   }


//   handleClickDesayuno = (e) => {
//     console.log(this.state.menus[0]);
//         const Desayunos = [];
//         this.database.on('child_added', snapshot => {
//         snapshot.forEach(item => {
//           console.log(Object.values(item.val()))
//         })
//         this.setState({isMenuIn:true})
//       })
//   }

//   handleClickAlmuerzo = (e) => {
//     console.log(this.state.menus[1]);
//         const Almuerzos = [];
//         this.database.on('child_added', snapshot => {
//         snapshot.forEach(item => {
//           console.log(Object.values(item.val()))
//         })
//         this.setState({isMenuIn:false})
//       })
//   }

  
 
  
//   render() {
//     console.log(this.state)
//     const isMenuIn = this.state.isMenuIn;
//     let button;

//     if(isMenuIn){
//       button = < desayunoButton onClick={this.handleClickDesayuno}/>
//     } else {
//       button = < almuerzoButton onClick={this.handleClickAlmuerzo}/>
//     }
    
    
//     return (
  
//       <div className="container">
//         <div className="menuContainer">   
//             {
//               this.state.menus.map((menu,i) => {
//                 //console.log(menu)
//                 return (
//                   <div>  {button} </div>
                 
//                   //<button onClick = {this.state.isMenuIn} key={i} type="button" className="btn btn-primary btn-lg mr-2" id={menu} >{menu}</button>
//                 )
//               })
//             }
//         </div> 
//         <div className="dessayunoCantainer">
//             {
//               // this.state.menus.map(()=>{
//               //   return (
//               //     <p></p>

//               //   )
//               //})
//             }
          
//         </div>
//        </div>
//     );
//   }
// }

// export default ViewMenu;
