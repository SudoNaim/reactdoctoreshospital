import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
import DetallesDoctor from "./DetallesDoctor";
export default class DoctoresComponent extends Component {
    urlDoctores = Global.utlApiDoctores;

    state = {
        doctores: [],
        doctorDetalles: null
    }
    componentDidUpdate = (prevProps) => {
        if (prevProps.idHospital !== this.props.idHospital) {
            this.loadDoctores();
        }
    }

    componentDidMount = () => {
        this.loadDoctores();
    }

    loadDoctores = () => {
        let request = "/api/Doctores/DoctoresHospital/" + this.props.idHospital;
        console.log("URL DOCTORES: "+this.urlDoctores + request);
        axios.get(this.urlDoctores + request).then(response => {
            this.setState({
                doctores: response.data
            });
        })
    }

    loadDoctorDatos = (idDoctor) => {
        setState({
            doctorDetalles: idDoctor
        });
    }

    render() {
        return (
            <div>
                <h1>Doctores disponibles en el hospital (ID: {this.props.idHospital})</h1>
                <DetallesDoctor idDoctor={this.state.doctorDetalles}/>
                <ul>
                    {this.state.doctores.map((doctor, index) => (
                        <li key={index}>
                            {doctor.especialidad} - {doctor.apellido}
                            <button onClick={() => this.loadDoctorDatos(doctor.idDoctor)}>Ver detalles</button>
                        </li>
                    ))}
                </ul>

            </div>
        );
    }
}
