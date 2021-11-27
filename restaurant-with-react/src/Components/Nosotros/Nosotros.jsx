import React, { Component } from "react";
import "./Styles/Style-Nosotros.css";
import Empleados from "./Empleados";
import Historia from "./Historia";
import Testimonios from "./Testimonios";
import Constantes from "../Servicios/Constantes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Nosotros extends Component {
  constructor(props) {
    super(props);
    this.state = {
        restaurantes: [],
    };
}

async componentDidMount() {
    const respuesta = await fetch(`${Constantes.RUTA_API}/obtenerRestaurantes.php`);
    const restaurantes = await respuesta.json();
    this.setState({
      restaurantes: restaurantes,
    });
}

  render() {
    return (
      <>
        <div className="principal-nosotros">
          <div className="history">
            {this.state.restaurantes.map(restaurante=>{
              return <Historia key={restaurante.id} restaurante={restaurante}></Historia>;
            })}
          </div>

          <div className="empleados">
            <div className="container">
              <Empleados />
            </div>
          </div>
          <div>
            <Testimonios />
          </div>
        </div>
      </>
    );
  }
}

export default Nosotros;
