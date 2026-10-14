import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';
import ServiceHospitales from '../Services/ServiceHospitales';
export default class HospitalComponent extends Component {
  url = Global.urlApiHospitales;
  serviceHospitales = new ServiceHospitales();
  state = {
    hospitales: [],
  }

  loadHospitales = () => {
this.serviceHospitales.getHospitales().then(hospitales => {
      console.log("Hospitales cargados: ", hospitales);
      this.setState({
        hospitales: hospitales
      });
    });
  }

  componentDidMount = () => {
    this.loadHospitales();
  }

  render() {
    return (
      <div>
        <h1>Hospitales disponibles</h1>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Dirección</th>
              <th>Teléfono</th>
              <th>Camas</th>
            </tr>
          </thead>
          <tbody>
            {this.state.hospitales.map((hospital, index) => (
              <tr key={index}>
                <td>{hospital.idHospital}</td>
                <td>{hospital.nombre}</td>
                <td>{hospital.direccion}</td>
                <td>{hospital.telefono}</td>
                <td>{hospital.camas}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}
