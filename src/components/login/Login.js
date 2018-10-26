import React, { Component} from 'react';
import credentials from '../../credentials/Firebase'
import ResetPass from './ResetPass';

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
            password: '',
            emailRestore: ''
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
          alert('Debes ingresar un correo y contraseña validos')
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
                        <img className="form-logo" src={logo} alt="logo-BurgerQueen"></img>
                    </section>
                    <section className="">
                        <p className="mt-5 mb-5">Estimado colaborador, inicia sesión para hacer tus pedidos</p>
                        <form>
                            <label htmlFor="exampleEmail">Correo electrónico</label>
                            <input value={this.state.email} onChange={this.handleChange} type="email" name="email" id="exampleEmail" className="form-control form-input" placeholder="usuario@example.com" />
                        </form>
                        <form>
                            <label htmlFor="examplePassword">Contraseña</label>
                            <input value={this.state.password} onChange={this.handleChange} type="password" name="password" id="examplePassword" className="form-control form-input"/>
                        </form>
                    </section>
                    <section className="btn btn-danger btn-lg btn-block mt-3 mb-4">
                        <button type="submit" onClick={this.login} className="btn btn-danger btn-lg btn-block ">Iniciar sesión</button>
                    </section>
                </div>
                <div>
                    <ResetPass/>
                </div>
            </main>
            
        );
    }
}


export default Login;