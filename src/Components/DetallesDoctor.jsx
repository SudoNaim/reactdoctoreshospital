import React, { Component } from 'react'
import axios from 'axios';
export default class DetallesDoctor extends Component {
    urlDoctores = Global.utlApiDoctores;
    state = {
        doctorApellido: "",
        doctorEspecialidad: "",
        doctorSalario: 0,
        doctorIdHospital: 0,
        doctorIdDoctor: 0
    }
    componentDidMount = () => {
        console.log("DetallesDoctor: ", this.props.doctor);
    }

    loadDoctorDatos = (idDoctor) => {
        url = this.urlDoctores + "/api/Doctores/" + idDoctor;
        axios.get(url).then(response => {
            this.setState({
                doctorApellido: response.data.apellido,
                doctorEspecialidad: response.data.especialidad,
                doctorSalario: response.data.salario,
                doctorIdHospital: response.data.idHospital,
                doctorIdDoctor: response.data.idDoctor
            });
        })
    }

    didUpdate = (prevProps) => {
        if (prevProps.idDoctor !== this.props.idDoctor) {
            console.log("DetallesDoctor: ", this.props.idDoctor);

        }
    }
  render() {
    return (
      <div>
        <h3>Detalles del Doctor</h3>
        <p>Nombre: {}</p>
        <p>Especialidad: {}</p>
        <p>Salario: {}</p>
        <p>Id Hospital: {}</p>
        <p>Id Doctor: {}</p>
      </div>
    )
  }
}
