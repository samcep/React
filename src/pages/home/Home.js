import './Home.css';
import foto from './fondo.svg'
import fotodos from './fondo2.svg'
import {
    Link
 } from "react-router-dom";

function Home(){
    return(

        <div className="home">
           
            <header>
                <div className="home__menu">
                    <ul className="home__menu__item"> 
                        <li>
                            Inicio
                        </li>
                        
                        
                               <Link to="/proyecto"><li>Proyectos</li></Link>
                               <Link to="/experiencia"><li>Experiencia</li></Link>
                        

                        
                          
                        
                    </ul>
                </div>
            </header>

            <div className="seccion">
                <div className="seccion__img">
                    
                    <img src={fotodos} width="400px" height="350px"> 
                    </img>
                </div>
                <div className="seccion_content"> 
                    <p>
                        <h1>¡Hola!</h1>
                        <span> Soy Samuel Casallas Cepeda</span>
                    </p>
                 
                       
                    
                   <Link to="/portafolio"> <button className="seccion__button">Ver más
                   </button>
                   </Link>
                </div>
                
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#229954" fill-opacity="1" d="M0,192L48,202.7C96,213,192,235,288,229.3C384,224,480,192,576,160C672,128,768,96,864,96C960,96,1056,128,1152,122.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>

        </div>
    );
}

export default Home;