import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <div className="Navbar row" style={{width: "100%"}}>
                <Link to="/" className="navbar-brand text-white col-3 ">Sal&amp;Salsa</Link>
                <Link to="/Nosotros" className="nav-link text-white ">NOSOTROS</Link>
                <Link to="/Menu" className="nav-link text-white">El MENÚ</Link>
                <Link to="/Servicios" className="nav-link text-white">SERVICIOS</Link>
                <Link to="/Reservas" className="nav-link text-white">HAZ TU RESERVA</Link>
                <Link to="/Carrito" className="nav-link text-white">COMPRAR</Link>
                <Link to="/IniciarSesion" className="nav-link text-white"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg></Link> 
            </div>  
        </>
    )
}

/* 
<a className="navbar-brand text-white col-3 " href="index.html">
              Sal&amp;Salsa
            </a>
            <div
              className="collapse navbar-collapse col-7 "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav row w-100 text_nav">
                <li className="nav-item active w-25">
                  <a className="nav-link text-white " href="nosotros.html">
                    NOSOTROS
                  </a>
                </li>
                <li className="nav-item w-25">
                  <a className="nav-link text-white" href="menua copy.html">
                    EL MENU
                  </a>
                </li>
                <li className="nav-item w-25 ">
                  <a className="nav-link text-white" href="Servicios.html">
                    SERVICIOS
                  </a>
                </li>
                <li className="nav-item w-25">
                  <a className="nav-link text-white " href="contacto.html">
                    CONTACTO
                  </a>
                </li>
              </ul>
            </div> */