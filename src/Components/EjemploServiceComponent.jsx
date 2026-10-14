import React, { Component } from 'react'
// Cámbialo en tu componente EjemploServiceComponent.js
import ServiceEjemplo from '../Services/ServiceEjemplo';
export default class EjemploServiceComponent extends Component {
    service = new ServiceEjemplo();

    state = {
        comics: []
    }

    onClickSaludo = (e) => {
        e.preventDefault();
        let saludo = this.service.getSaludo();
        alert(saludo);
    }

    onClickDia = (e) => {
        e.preventDefault();
        let dia = this.service.getDia("Juan");
        alert(dia);
    }

    componentDidMount = () => {
        let comics = this.service.getComics();
        this.setState({ comics });
    }
  
    render() {
    return (
      <div>
        <h1>Ejemplo de uso de un servicio</h1>
        <button onClick={this.onClickSaludo}>Saludo</button>
        <button onClick={this.onClickDia}>Día</button>
        <h2>Listado de cómics</h2>
        {
            this.state.comics.map((comic, index) => (
                <div key={index}>
                    <h3>{comic.titulo}</h3>
                    <img src={comic.imagen} alt={comic.descripcion} />
                    <p>{comic.descripcion}</p>
                </div>
            ))
        }
      </div>

    )
  }
}
