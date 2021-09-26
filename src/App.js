
import './App.css';

import React from "react";
import Portafolio from './pages/Portafolio';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/home/Home';
import Proyecto from './pages/proyecto/Proyecto';
import Experiencia from './pages/experiencia/Experiencia';

function App() {
  return (
  
    <Router>
      <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route path="/portafolio">
        <Portafolio/>
  
      </Route>
      <Route path="/proyecto">
      <Proyecto></Proyecto>
  
      </Route>
      <Route path="/experiencia">
      <Experiencia></Experiencia>
  
      </Route>
      <Route path="*">
        <div className="contenedor__error">
        <div className="contenedor__ruta">
        <h3> ups, No se encutan la ruta!</h3>
        </div>
        </div>

       
         
      </Route>
      </Switch>
    </Router>
  

  
  );
}

export default App;
