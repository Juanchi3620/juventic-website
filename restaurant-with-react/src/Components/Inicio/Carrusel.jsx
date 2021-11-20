import React from "react";
import "./Styles/styles.css"

function Carrusel() {
  return (
    <>
      <div className="">
        <div id="demo" className="carousel slide w-100" data-ride="carousel">
          {/* Indicators */}
          <ul className="carousel-indicators">
            <li data-target="#demo" data-slide-to={0} className="active" />
            <li data-target="#demo" data-slide-to={1} />
            <li data-target="#demo" data-slide-to={2} />
          </ul>
          {/* The slideshow */}
          <div className="carousel-inner ">
            <div className="carousel-item active ">
              <img className="rounded img-fluid  " src="https://firebasestorage.googleapis.com/v0/b/imagenes-guardar.appspot.com/o/Restaurante%2Ffoto1%402x.png?alt=media&token=9a15b4fd-0f19-4053-89f5-d553e9f4ead5" alt="Plato"/>
              <div
                className="icono_carousel"
                style={{ height: 350, width: 350, margin: "auto" }}
              >
                <img className="rounded img-fluid  " src="https://firebasestorage.googleapis.com/v0/b/imagenes-guardar.appspot.com/o/Restaurante%2Flogo%402x.png?alt=media&token=85aada55-01e5-48df-a634-e7b274f696df" alt="Plato"/>
              </div>
              <div className="titulo_carousel">
                <h1 className="text-white">
                  Sabores que{" "}
                  <kbd style={{ backgroundColor: "rgb(255, 115, 0)" }}>
                    exaltan
                  </kbd>{" "}
                  tus sentidos
                </h1>
              </div>
            </div>
            <div className="carousel-item">
              <img className="rounded img-fluid  " src="https://firebasestorage.googleapis.com/v0/b/imagenes-guardar.appspot.com/o/Restaurante%2Ffoto1%402x.png?alt=media&token=9a15b4fd-0f19-4053-89f5-d553e9f4ead5" alt="Plato"/>
              <div
                className="icono_carousel"
                style={{ height: 350, width: 350, margin: "auto" }}
              >
                <img className="rounded img-fluid  " src="https://firebasestorage.googleapis.com/v0/b/imagenes-guardar.appspot.com/o/Restaurante%2Flogo%402x.png?alt=media&token=85aada55-01e5-48df-a634-e7b274f696df" alt="Plato"/>
              </div>
              <div className="titulo_carousel">
                <h1 className="text-white">
                  Sabores que{" "}
                  <kbd style={{ backgroundColor: "rgb(255, 115, 0)" }}>
                    exaltan
                  </kbd>{" "}
                  tus sentidos
                </h1>
              </div>
            </div>
            <div className="carousel-item">
              <img className="rounded img-fluid  " src="https://firebasestorage.googleapis.com/v0/b/imagenes-guardar.appspot.com/o/Restaurante%2Ffoto1%402x.png?alt=media&token=9a15b4fd-0f19-4053-89f5-d553e9f4ead5" alt="Plato"/>
              <div
                className="icono_carousel"
                style={{ height: 350, width: 350, margin: "auto" }}
              >
                <img className="rounded img-fluid  " src="https://firebasestorage.googleapis.com/v0/b/imagenes-guardar.appspot.com/o/Restaurante%2Flogo%402x.png?alt=media&token=85aada55-01e5-48df-a634-e7b274f696df" alt="Plato"/>
              </div>
              <div className="titulo_carousel">
                <h1 className="text-white">
                  Sabores que{" "}
                  <kbd style={{ backgroundColor: "rgb(255, 115, 0)" }}>
                    exaltan
                  </kbd>{" "}
                  tus sentidos
                </h1>
              </div>
            </div>
          </div>
          {/* Left and right controls */}
          <a className="carousel-control-prev" href="#demo" data-slide="prev">
            <span className="carousel-control-prev-icon" />
          </a>
          <a
            className="carousel-control-next h-80"
            href="#demo"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Carrusel;
