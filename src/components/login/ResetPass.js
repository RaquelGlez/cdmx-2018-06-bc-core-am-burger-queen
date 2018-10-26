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
                alert('Instrucciones enviadas a tu correo');
            }).catch(function(error) {
            // An error happened.
                alert('Ingresa un correo valido')
            console.log(error.Code);
            console.log(error.Message);
        });
        }
     



        handleChange(e){
        this.setState({ [e.target.name]: e.target.value});
    }


    render() {
        return (

            <div>
                <a href="/#" className="brown-text" data-toggle="modal" data-target="#exampleModal">¿Olvidaste tu Contraseña?</a>
                
                {/* Modal */}
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Restablece tu contraseña</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <section className="col-sm">
                                <img className="form-logo mt-5 mb-5" width="200px" src={logo} alt="logo-BurgerQueen"></img>
                                <p>Ingresa tu correo electrónico para recibir instrucciones</p>
                            </section>
                            <section className="form-group">
                                <form>
                                    <input value={this.state.email} onChange={this.handleChange} type="email" name="email" id="Email" className="form-control form-input" placeholder="usuario@example.com" />
                                </form>
                            </section>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        <button onClick={this.restPass} type="button" className="btn btn-danger">Enviar</button>
                    </div>
                    </div>
                </div>
                </div>

            </div>  
            
        );
    }
}


export default ResetPass;