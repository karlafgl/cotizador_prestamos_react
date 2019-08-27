import React, { Component, Fragment } from "react";
import "./App.css";
import "./normalize.css";
import "./skeleton.css";
import Formulario from "./componentes/Formulario";
import { calcularTotal } from "./helpers";
import Resultado from "./componentes/Resultado";
import Mensaje from "./componentes/Mensaje";
import Spinner from "./componentes/Spinner";

class App extends Component {
  state = {
    total: "",
    cantidad: "",
    plazo: "",
    cargando: false
  };

  datosPrestamos = (cantidad, plazo) => {
    const total = calcularTotal(cantidad, plazo);

    //colocar el resultado en el estate junto a la cantidad y el plazo
    this.setState(
      {
        cargando: true
      },
      () => {
        setTimeout(() => {
          this.setState({
            total,
            plazo,
            cantidad,
            cargando: false
          });
        }, 3000);
      }
    );
  };

  render() {
    const { total, plazo, cantidad, cargando } = this.state;

    //cargar un componente condicionalmente
    let componente;
    if (total === "" && !cargando) {
      componente = <Mensaje />;
    } else if (cargando) {
      componente = <Spinner />;
    } else {
      componente = (
        <Resultado total={total} plazo={plazo} cantidad={cantidad} />
      );
    }

    return (
      <Fragment>
        <h1>Cotizador de Prestamos</h1>
        <div className="container">
          <Formulario datosPrestamos={this.datosPrestamos} />
          <div className="mensajes">{componente}</div>
        </div>
      </Fragment>
    );
  }
}

export default App;
