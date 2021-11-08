import React, { Component } from "react";
import "./Styles/Style-Nosotros.css";
import Empleados from "./Empleados";
import Historia from "./Historia";
import Testimonios from "./Testimonios";

class Nosotros extends Component {
  render() {
    return (
      <>
        <div className="principal-nosotros">
          <div className="history">
            <Historia />
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
