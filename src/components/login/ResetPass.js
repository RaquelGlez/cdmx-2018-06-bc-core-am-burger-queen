import React, { Component} from 'react';
import credentials from '../../credentials/Firebase'


// Assets
import './Login.css';
import logo from '../../Images/logo.png'

class ResetPass extends Component {
    constructor (props) {
        super(props);
        this.restPass = this.restPass.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: ''
        }
    }

        restPass(e) {
            e.preventDefault();
            credentials.auth().sendPasswordResetEmail(this.state.email).then(function() {
                prompt('correo enviado');
            }).catch(function(error) {
            // An error happened.
            console.log(error.Code);
            console.log(error.Message);
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
                        <formgroup>
                            <label htmlFor="exampleEmail">Correo electrónico</label>
                            <input value={this.state.email} onChange={this.handleChange} type="email" name="email" id="exampleEmail" className="form-control form-input" placeholder="usuario@example.com" />
                        </formgroup>
                    </section>
                    <section className="btn btn-danger btn-block form-button mt-3 mb-5">
                        <button type="submit" onClick={this.restPass} className="btn-block btn-danger ">Enviar correo</button>
                    </section>
                </div>

            </main>
            
        );
    }
}


export default ResetPass;