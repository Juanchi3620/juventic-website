import React, { Component } from "react";
import Formulario from "./Formulario";
import "./Styles/reserva.css";

class Reserva extends Component {
  render() {
    return (
      <>
        <div style={{ backgroundImage: "./Images/foto3@2x.png" }}>
          <div className="container row" style={{justifyContent:"center", marginTop:"2rem"}}>
            <h1 className="font-weight-bold" >HAZ TU RESERVA!</h1>
          </div>
          <div className="container" style={{ marginTop: "3%" }}>
            <div className="row">
              <div className="col-sm-6 vinotinto_text">
                <p className="text-justify">
                  <i>Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium
                  purus sit amet fermentum. Donec sed odio operae, eu vulputate
                  felis rhoncus. Praeterea iter est quasdam res quas ex communi.
                  At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi
                  concilium totius Galliae in diem certam indicere. Cras mattis
                  iudicium purus sit amet fermentum.</i>
                </p>
                <p className="text-justify">
                  <i>Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium
                  purus sit amet fermentum. Donec sed odio operae, eu vulputate
                  felis rhoncus. Praeterea iter est quasdam res quas ex communi.
                  At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi
                  concilium totius Galliae in diem certam indicere. Cras mattis
                  iudicium purus sit amet fermentum.</i>
                </p>
              </div>

              <Formulario />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Reserva;
