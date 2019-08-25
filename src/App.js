import React, { Component, Fragment } from 'react';
import './App.css';
import './normalize.css';
import './skeleton.css';
import Formulario from './componentes/Formulario';
import {calcularTotal} from './helpers'

class App extends Component {

  state = {
    total:'',
    cantidad:'',
    plazo: ''
  } 
  datosPrestamos = (cantidad, plazo) =>{
    const total = calcularTotal(cantidad, plazo)

    //colocar el resultado en el estate junto a la cantidad y el plazo 
    
  }

  render(){
    return (
      <Fragment>
        <h1>Cotizador de Prestamos</h1>
        <div className='container'>
          <Formulario
            datosPrestamos={this.datosPrestamos}
          />
        </div>
      </Fragment>
    );
  }

}

export default App;
