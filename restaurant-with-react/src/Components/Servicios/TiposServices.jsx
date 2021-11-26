import React from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Constantes from "./Constantes";

class TiposServices extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Si han eliminado este juego, no necesitamos mostrarlo
      eliminado: false,
    };
    /* this.redireccionarParaEditar = this.redireccionarParaEditar.bind(this);
    this.eliminar = this.eliminar.bind(this); */
  }
  /* async eliminar() {
    const resultado = await Swal.fire({
      title: "Confirmación",
      text: `¿Eliminar "${this.props.videojuego.nombre}"?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3298dc",
      cancelButtonColor: "#f14668",
      cancelButtonText: "No",
      confirmButtonText: "Sí, eliminar",
    });
    // Si no confirma, detenemos la función
    if (!resultado.value) {
      return;
    }
    const respuesta = await fetch(
      `${Constantes.RUTA_API}/eliminar_videojuego.php?id=${this.props.videojuego.id}`,
      {
        method: "DELETE",
      }
    );
    const exitoso = await respuesta.json();
    if (exitoso) {
      toast("Videojuego eliminado ", {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      this.setState({
        eliminado: true,
      });
    } else {
      toast.error("Error eliminando. Intenta de nuevo");
    }
  } */

  render() {
    if (this.state.eliminado) {
      return null;
    }
    return (
      <>
      <div className="d-flex flex-column col-lg-6 col-md-12 col-sm-12" style={{ flexDirection: "row", marginBottom: "2rem" }}>
        <div
          className="conte"
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "rgb(219, 215, 215)",
          }}
        >
          <div
            className="col-sm-6 p-5"
            style={{
              backgroundImage:
                "linear-gradient(to right top, #f94d4d, #ff7a36, #ffa71d, #fed416, #e6ff40)",
              textAlign: "center",
            }}
          >
            <img
              className="mx-auto Imagen-servicio rounded img-fluid"
              src={this.props.servicio.imagen}
              alt="Empleado tal"
            ></img>
          </div>
          <div className="col-sm-6" style={{ marginTop: "2rem" }}>
            <h1 className="mx-auto" style={{ fontSize: "2rem" }}>
              {this.props.servicio.nombre}
            </h1>
            <p className="mx-auto">
              <i>{this.props.servicio.descripcion}</i>
            </p>
            <a type="button" className="btn btn-danger" href="/Reservas">
              ¿PREGUNTAS? CONTACTANOS
            </a>
          </div>
        </div>
        </div>
      </>
    );
  }
}

export default TiposServices;

 /*<div className="Contenido">
          <div className="row align-items-start">
            {Services.map((servicio, index) => {
              return (
                <div
                  key={index}
                  className="d-flex flex-column col-lg-6 col-md-12 col-sm-12"
                  style={{ flexDirection: "row", marginBottom: "2rem" }}
                >
                  <div
                    className="conte"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      backgroundColor: "rgb(219, 215, 215)",
                    }}
                  >
                    <div
                      className="col-sm-6 p-5"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right top, #f94d4d, #ff7a36, #ffa71d, #fed416, #e6ff40)",
                        textAlign: "center",
                      }}
                    >
                      <img
                        className="mx-auto Imagen-servicio rounded img-fluid"
                        src={servicio.imagen}
                        alt="Empleado tal"
                      ></img>
                    </div>
                    <div className="col-sm-6" style={{ marginTop: "2rem" }}>
                      <h1 className="mx-auto" style={{ fontSize: "2rem" }}>
                        {servicio.titulo}
                      </h1>
                      <p className="mx-auto">
                        <i>{servicio.descripcion}</i>
                      </p>
                      <a
                        type="button"
                        className="btn btn-danger"
                        href="/Reservas"
                      >
                        ¿PREGUNTAS? CONTACTANOS
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div> */
