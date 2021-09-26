import './Experiencia.css'
import foto from './designer.svg'
import {
    Link
 } from "react-router-dom";
function Experiencia(){
    return(
        <div className="contenedor__proyecto" >
        <div className="contenedor__card"> 
            <h3>Experiencia</h3>
            <p>
               Soy técnico en programación de software, actualmente estoy cursando un tecnologo en análisis
               y desarrollo de sistemas de información, he creado un sistema de informacón para un conjuto residencial
               para llevar el control de las visitas que entran y salen del conjunto.
            </p>
            <div>
                <img src={foto}></img>
            </div>

        </div>
        <Link to="/"> <button className="seccion__button">Inicio</button></Link>
    </div>
    )
}

export default Experiencia;