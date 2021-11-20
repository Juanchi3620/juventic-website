import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer style={{ backgroundColor: "rgb(75, 14, 14)", bottom: "0", width: "100%", height: "35%", color: "white" }}>
        <div className="container ">
          <div className="row">
            <div className="col-sm-3">
              <img src="https://firebasestorage.googleapis.com/v0/b/imagenes-guardar.appspot.com/o/Restaurante%2Flogo%402x.png?alt=media&token=85aada55-01e5-48df-a634-e7b274f696df" className="rounded h-100 w-100" alt="Este es el logo"/>
            </div>
            <div className="container col-sm-4 ">
              <a
                className="mt-3 mr-3 text-white d-inline-block"
                href="/"
              >
                MAPA DEL SITIO
              </a>
              <a
                className="mt-3 mr-3 text-white d-inline-block"
                href="/Reservas"
              >
                CONTACTANOS
              </a>
              <a
                className="mt-3 mr-3 text-white d-inline-block"
                href="/Reservas"
              >
                RESERVAS
              </a>
              <div className="text-white">
                <address className="align-text-bottom">
                  <br />
                  Restaurante Sal y Salsa Ltda
                  <br />
                  Calle 100 N° 100-100, Bogota
                  <br />
                  Reservas@salysalsa.com
                  <br />
                  3219876541
                  <br />
                  <br />© Copyright 2020.
                </address>
              </div>
            </div>
            <div className="col-sm-4">
              <iframe
                title="Frame"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15836.233746791158!2d-73.11714779113763!3d7.119226807143491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1631562274241!5m2!1ses!2sco"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
