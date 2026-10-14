import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';
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
        let url = this.urlDoctores + "/api/Doctores/" + idDoctor;
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

    componentDidUpdate = (prevProps) => {
        if (prevProps.idDoctor !== this.props.idDoctor) {
            console.log("DetallesDoctor: ", this.props.idDoctor);
            this.loadDoctorDatos(this.props.idDoctor);
        }
    }
  render() {
    return (
      <div>
        <h3>Detalles del Doctor</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Dato</th>
              <th scope="col">Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Nombre</th>
              <td>{this.state.doctorApellido}</td>
            </tr>
            <tr>
              <th scope="row">Especialidad</th>
              <td>{this.state.doctorEspecialidad}</td>
            </tr>
            <tr>
              <th scope="row">Salario</th>
              <td>{this.state.doctorSalario}</td>
            </tr>
            <tr>
              <th scope="row">Id Hospital</th>
              <td>{this.state.doctorIdHospital}</td>
            </tr>
            <tr>
              <th scope="row">Id Doctor</th>
              <td>{this.state.doctorIdDoctor}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
