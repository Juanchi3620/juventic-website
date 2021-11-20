import React from 'react'
import Empleado from "./Empleado.json"

export const Empleados = () => {
  return (
    <>
        <div className="trabajadores">
          <div className="row align-items-start">
            {Empleado.map((trabajador, index) => {
              return (
                <div key={index} className="Trabajador d-flex flex-column col-lg-4 col-md-12 col-sm-12">
                  <img className="mx-auto" src={trabajador.Imagen} alt="Empleado tal"></img>
                  <h3 className="mx-auto" style={{fontSize:"1.5rem"}}><b>{trabajador.Name}</b></h3>
                  <h6 className="mx-auto" style={{fontSize:"1.5rem"}}><i>{trabajador.Cargo}</i></h6>
                </div>
              );
            })}
          </div>
          
        </div>
      </>
  )
}



/* class Empleados extends Component {
  render() {
    return (
      <>
        <div className="trabajadores">
          <div className="row align-items-start">
            {Trabajadores.Fila1.map((trabajador) => {
              return (
                <div className="Trabajador col">
                  <img src={trabajador.imgPerfil} alt="Empleado tal"></img>
                  <h3>{trabajador.Nombre}</h3>
                  <h6>{trabajador.cargo}</h6>
                </div>
              );
            })}
          </div>
          <div className="row align-items-start">
            {Trabajadores.Fila2.map((trabajador) => {
              return (
                <div className="Trabajador col">
                  <img src={trabajador.imgPerfil} alt="Empleado tal" />
                  <h3>{trabajador.Nombre}</h3>
                  <h6>{trabajador.cargo}</h6>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
} */

export default Empleados;