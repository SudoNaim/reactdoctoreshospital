import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
import DetallesDoctor from "./DetallesDoctor";
import ServiceHospitales from "../Services/ServiceHospitales";
export default class DoctoresComponent extends Component {
    urlDoctores = Global.utlApiDoctores;
    ServiceHospitales = new ServiceHospitales();
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
        this.ServiceHospitales.getDoctoresHospital(this.props.idHospital).then(doctores => {
            console.log("Doctores cargados: ", doctores);
            this.setState({
                doctores: doctores
            });
        });
    }

    loadDoctorDatos = (idDoctor) => {
        this.setState({
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
                            <p>{doctor.especialidad} - {doctor.apellido}&ensp;&ensp;&ensp;</p>
                            
                            <button onClick={() => this.loadDoctorDatos(doctor.idDoctor)}>Ver detalles</button>
                        </li>
                    ))}
                </ul>

            </div>
        );
    }
}
