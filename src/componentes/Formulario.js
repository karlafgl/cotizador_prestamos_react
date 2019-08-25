import React, { Component } from 'react';

const Formulario = () =>{
  return(
    <form>
      <div>
        <label>Cantidad Prestamo:</label>
        <input type='text' name='cantidad' className="u-full-width" placeholder="Ejemplo: 3000"/>
      </div>
      <div>
        <select name="plazo" className="u-full-width">
        <option value="">Seleccionar</option>
          <option value="3">3 Meses</option>
          <option value="6">6 Meses</option>
          <option value="12">12 Meses</option>
          <option value="24">24 Meses</option>
        </select>
      </div>
      <div>
        <input value="Calcular" placeholder="" type="submit" className="u-full-width button-primary"/>
      </div>
    </form>
  )
}

export default Formulario;