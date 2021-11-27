import React from "react";
import { Link } from 'react-router-dom'

const WantEdit = () => {
  return (
    <>
      <div className="container" style={{marginBottom:"2rem"}}>
        <div
          className="container row"
          style={{ justifyContent: "center", marginTop: "2rem" }}
        >
          <h1 className="font-weight-bold">¿Qué desea editar?</h1>
        </div>

        <div className="container d-flex flex-column justify-content-center border border-danger shadow-sm p-3 mb-5 bg-white rounded">
          <Link to="/nosotros/ver" class="btn btn-outline-light text-dark btn-sm" style={{fontSize:"2rem"}}>
            Historia del restaurante
          </Link>
          <Link to="/" class="btn btn-outline-light text-dark btn-sm" style={{fontSize:"2rem"}}>
            Personal del restaurante
          </Link>
          <Link to="/" class="btn btn-outline-light text-dark btn-sm" style={{fontSize:"2rem"}}>
          Comentarios de los clientes
          </Link>
          <Link to="/" class="btn btn-outline-light text-dark btn-sm" style={{fontSize:"2rem"}}>
            Platos del restaurante
          </Link>
          <Link to="/servicios/ver" class="btn btn-outline-light text-dark btn-sm" style={{fontSize:"2rem"}}>
            Servicios del restaurante
          </Link>
          <Link to="/" class="btn btn-outline-light text-dark btn-sm" style={{fontSize:"2rem"}} >
            Todo está bien
          </Link>
        </div>
      </div>
    </>
  );
};

export default WantEdit;
