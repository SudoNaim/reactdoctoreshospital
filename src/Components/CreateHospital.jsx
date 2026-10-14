import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';
import ServiceHospitales from '../Services/ServiceHospitales';

export default class CreateHospital extends Component {
    cajaID = React.createRef();
    cajaNombre = React.createRef();
    cajaDireccion = React.createRef();
    cajaTelefono = React.createRef();
    cajaCamas = React.createRef();

    ServiceHospitales = new ServiceHospitales();

    insertarHospital = (e) => {
        e.preventDefault();
        let hospital = {
            idHospital: parseInt(this.cajaID.current.value),
            nombre: this.cajaNombre.current.value,
            direccion: this.cajaDireccion.current.value,
            telefono: this.cajaTelefono.current.value,
            camas: parseInt(this.cajaCamas.current.value)
        };
        this.ServiceHospitales.insertarHospital(hospital).then(response => {
            console.log("Hospital insertado: ", response);
            this.setState({
                mensaje: "Hospital insertado correctamente",
                status: true
            });
        });
    }

    state = {
        mensaje: "",
        status: false
    }

    render() {
        return (
            <div>
                {
                    this.state.status == true &&
                    (<naviate to="/hospitales" />)
                }

                <h1>Crear Hospital</h1>
                <h3 style={{ color: "fuchsia" }}>{this.state.mensaje}</h3>
                <form>
                    <label>Ide hospital</label>
                    <input type="number" ref={this.cajaID} className="form-control"></input>
                    <label>Nombre hospital</label>
                    <input type="text" ref={this.cajaNombre} className="form-control"></input>
                    <label>Direccion hospital</label>
                    <input type="text" ref={this.cajaDireccion} className="form-control"></input>
                    <label>Telefono hospital</label>
                    <input type="text" ref={this.cajaTelefono} className="form-control"></input>
                    <label>Camas hospital</label>
                    <input type="number" ref={this.cajaCamas} className="form-control"></input>
                    <button onClick={this.insertarHospital} className="btn btn-warning">
                        Insertar Hospital
                    </button>
                </form>
            </div>
        )
    }
}
