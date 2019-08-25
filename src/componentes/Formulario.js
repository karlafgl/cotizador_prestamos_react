import React, { Component } from 'react';

class Formulario extends Component {
  state = {
    cantidad: '',
    plazo:''
  }

  calcularPrestamo = (e) => {
    e.preventDefault()

    //aplicar destructuring
    const {cantidad, plazo} = this.state
    
    //pasarlo al componente padre
    this.props.datosPrestamos(cantidad, plazo)
  }

  actualizarState = (e) => {
    //leer los datos del formulario
    const {name, value} = e.target

   //actualizar el state
   this.setState({
     [name]: Number(value)
   })
  }

  habilitarSubmit = () => {
    //aplicar destructuting para obtener valores
    const {cantidad, plazo} = this.state
    //Leer las variables
    const noValido = !cantidad || !plazo
    //retornar respuesta
    return noValido
  }

  render(){

    const {cantidad} = this.state

    return(
      <form onSubmit={this.calcularPrestamo}>
        <div>
          <label>Cantidad Prestamo:</label>
          <input 
                onChange={this.actualizarState}
                type='text' 
                name='cantidad' 
                className="u-full-width" 
                placeholder="Ejemplo: 3000"/>
        </div>
        <div>
          <label>Plazo para pagar:</label>
          <select onChange={this.actualizarState} name="plazo" className="u-full-width">
            <option value="">Seleccionar</option>
            <option value="3">3 Meses</option>
            <option value="6">6 Meses</option>
            <option value="12">12 Meses</option>
            <option value="24">24 Meses</option>
          </select>
        </div>
        <div>
          <input disabled={this.habilitarSubmit()} value="Calcular" placeholder="" type="submit" className="u-full-width button-primary"/>
        </div>
      </form>
    )
  }
}
 

export default Formulario;