import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MenuComponent from './MenuComponent'
import HomeComponent from './HomeComponent'
import { useParams } from 'react-router-dom';
import DoctoresComponent from './DoctoresComponent';
import CreateHospital from './CreateHospital';
import HospitalComponent from './HospitalesComponent';
import EjemploServiceComponent from './EjemploServiceComponent';

export default class Router extends Component {
    render() {

        function DoctoresElement () {
            let {idHospital} = useParams();
            return <DoctoresComponent idHospital={idHospital} />
        }

        return (
            <BrowserRouter>
                <MenuComponent/>
                <Routes>
                    <Route path='/' element={<HomeComponent />} />
                    <Route path='/doctores/:idHospital' element={<DoctoresElement/>}/>
                    <Route path='/createhospital' element={<CreateHospital/>}/>
                    <Route path='/hospitales' element={<HospitalComponent/>}/>
                    <Route path='/ejemplosservicios' element={<EjemploServiceComponent/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
}
