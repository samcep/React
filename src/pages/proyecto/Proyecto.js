
import './Proyecto.css';
import pay from './pay.svg';
import {
    Link
 } from "react-router-dom";
function Proyecto(){
    return(
        <div className="contenedor__proyecto" >
            <div className="contenedor__card"> 
                <h3>Motorbiike fix</h3>
                <p>
                    Es es un sistema de información basado en las empresas de motocicletas,
                    este proyecto facilita la labor de generación de reportes e informes y también les
                    facilita la reservación y gestión de solicitues de servicio en su taller.
                </p>
                <div>
                    <img src={pay}></img>
                </div>

            </div>
            <Link to="/"> <button className="seccion__button">Inicio</button></Link>
        </div>
    )
}

export default Proyecto;