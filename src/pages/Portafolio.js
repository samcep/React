import './Portafolio.css';
import Header from '../components/header/Header';
import Contact from '../components/contacto/Contact';
import About from '../components/about/About';
import Skills from '../components/skills/Skills';
import Footer from '../components/footer/Footer';
import Wave from '../components/headerWave/Wave';
import {
    Link
 } from "react-router-dom";
function Portafolio(){
    return(
        
        <>
        <Wave></Wave>
        <div className="contenedor"> 
        <Header></Header><Contact></Contact>
    <About></About>
    <Skills></Skills>
    <Link to="/"> <button className="seccion__button">Inicio</button></Link>
    </div>

    <Footer></Footer>
    </>
    

    );
}

export default Portafolio;