import React, { Component} from 'react';
import credentials from '../../credentials/Firebase'


// Assets
import './Login.css';
import logo from '../../Images/logo.png'

class Login extends Component {
    constructor (props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: '',
            password: ''
        }
    }


    login(e) {
        e.preventDefault();
        credentials.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(function() {
        }).catch((error)=>{
        // Mensaje en consola si existe error de inicio de sesion
          let errorCode = error.code;
          let errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
        });
    }



        handleChange(e){
        this.setState({ [e.target.name]: e.target.value});
    }


    render() {
        return (
            <main className="container">
                <div className="contenedor">
                    <section className="col-sm">
                        <img className="form-logo" src={logo} alt="Mi-Sazón"></img>
                    </section>
                    <section className="">
                        <formgroup>
                            <label for="exampleEmail">Correo electrónico</label>
                            <input value={this.state.email} onChange={this.handleChange} type="email" name="email" id="exampleEmail" className="form-control form-input" placeholder="usuario@example.com" />
                        </formgroup>
                        <formgroup>
                            <label for="examplePassword">Contraseña</label>
                            <input value={this.state.password} onChange={this.handleChange} type="password" name="password" id="examplePassword" className="form-control form-input"/>
                        </formgroup>
                    </section>
                    <section className="btn btn-warning btn-block form-button mt-3">
                        <button type="submit" onClick={this.login} className="btn-warning ">Iniciar sesión</button>
                    </section>
      
                </div>
   
                
            </main>
            
        );
    }
}


export default Login;