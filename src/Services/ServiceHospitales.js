import axios from "axios";
import Global from "../Global";

export default class ServiceHospitales {
    
    getHospitales() {
        return new Promise((resolve) => {
            // Usamos la variable directa, sin "this."
            let url = Global.urlApiHospitales; 
            // Quitamos el "/" inicial porque la URL de Global ya termina en "/"[cite: 1]
            let request = "api/Hospitales"; 
            
            axios.get(url + request).then(response => {
                console.log("Leyendo Hospitales");
                resolve(response.data);
            });
        });
    }

    getDoctoresHospital(idHospital) {
        return new Promise((resolve) => {
            let url = Global.utlApiDoctores; 
            let request = "api/Doctores/DoctoresHospital/" + idHospital;
            axios.get(url + request).then(response => {
                console.log("Leyendo Doctores del Hospital: " + idHospital);
                resolve(response.data);
            });
        });
    }

    insertarHospital(hospital) {
        return new Promise((resolve) => {
            let url = Global.urlApiHospitales; 
            let request = "api/Hospitales";
            axios.post(url + request, hospital).then(response => {
                console.log("Hospital insertado correctamente");
                resolve(response.data);
            });
        });
    }
}