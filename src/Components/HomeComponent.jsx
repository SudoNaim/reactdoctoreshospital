import React, { Component } from 'react'

export default class HomeComponent extends Component {
    render() {
        return (
            <main>
                <section className="bg-primary text-white text-center py-5">
                    <div className="container">
                        <h1 className="display-4">Hospital Web del Estado</h1>
                        <p className="lead">
                            Cuidamos de ti y de tu familia con atencion medica cercana y de calidad.
                        </p>
                        <button className="btn btn-light btn-lg">Pedir cita</button>
                    </div>
                </section>

                <section className="container py-5">
                    <div className="row text-center g-4">
                        <div className="col-md-4">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body">
                                    <h2 className="h4">Nuestros especialistas</h2>
                                    <p className="card-text">
                                        Consulta nuestro equipo medico y sus especialidades.
                                    </p>
                                    <a className="btn btn-outline-primary" href="/doctores/22">
                                        Ver doctores
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body">
                                    <h2 className="h4">Servicios medicos</h2>
                                    <p className="card-text">
                                        Atencion primaria, urgencias y pruebas diagnosticas.
                                    </p>
                                    <span className="badge bg-success fs-6">Centro abierto</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body">
                                    <h2 className="h4">Urgencias</h2>
                                    <p className="card-text">
                                        Si necesitas atencion inmediata, estamos disponibles las 24 horas.
                                    </p>
                                    <strong className="text-danger">Telefono: 900 123 456</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}
