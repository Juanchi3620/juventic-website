import React, { Component } from "react";
import Constantes from "../Servicios/Constantes";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export class Historia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eliminado: false,
    };
  }

  render() {
    if (this.state.eliminado) {
      return null;
    }

    return (
      <>
        <div className="Restaurante-Historia">
          <div className="Img-Historia">
            <img src={this.props.restaurante.imagen} alt="Restaurante" />
          </div>
          <div className="Texto-historia">
            <h1>
              Nuestra <br />
              <span>Historia</span>
            </h1>
            <p>{this.props.restaurante.descripcion}</p>
          </div>
        </div>
      </>
    );
  }
}

export default Historia;

/* <div className="Restaurante-Historia">
          <div className="Img-Historia">
            <img src="https://firebasestorage.googleapis.com/v0/b/imagenes-guardar.appspot.com/o/Restaurante%2Ffoto4%402x.png?alt=media&token=b6eb7644-45ce-444a-88ac-389f98f19ebc" alt="Restaurante" />
          </div>
          <div className="Texto-historia">
            <h1>
              Nuestra <br />
              <span>Historia</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              hendrerit aliquet ante vel ornare. Curabitur eu maximus mauris.
              Proin rutrum euismod sapien, at consequat enim. Nullam rutrum
              mauris nec dolor varius vehicula. Interdum et malesuada fames ac
              ante ipsum primis in faucibus. In feugiat arcu ut dolor varius,
              vel aliquam velit molestie. Curabitur vitae odio libero. Nam
              rhoncus massa nec lorem dignissim laoreet. Donec finibus interdum
              placerat. Mauris sed porttitor turpis. Sed nisi libero, fringilla
              ut sem ut, hendrerit dignissim mi. <br />
              <br />
              Etiam faucibus consequat sapien vitae scelerisque. Mauris
              sollicitudin, nulla ut placerat dignissim, urna enim volutpat
              dolor, nec luctus ligula justo ullamcorper elit. Curabitur ipsum
              mauris, congue vestibulum volutpat eu, pharetra eu turpis. Proin
              pharetra ligula eu dignissim sodales. Donec in vulputate mi.
              Maecenas ornare ex quis velit fermentum, nec eleifend nulla
              ultrices. Pellentesque at erat non ipsum sagittis ornare non
              dignissim arcu. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Curabitur sit amet
              arcu sit amet ligula malesuada pretium ut non lectus. Mauris
              sagittis vehicula odio scelerisque ultrices. Nulla mattis sit amet
              nulla sit amet fermentum. Integer eleifend placerat lacus eget
              dignissim. Nullam vel tincidunt magna. <br />
              <br /> Praesent eget dui ligula. Ut ut massa sit amet quam iaculis
              malesuada. Integer ullamcorper porta euismod. Nam quis ante nec
              elit tempor porttitor ac eu turpis. Phasellus sagittis, dolor a
              pretium sagittis, velit purus iaculis mi, et rutrum turpis tortor
              bibendum turpis. Vivamus eget placerat enim. Ut tempus massa elit,
              id sollicitudin libero sagittis non. Nunc vehicula condimentum
              aliquam. Maecenas sodales velit ac congue convallis.
            </p>
          </div>
        </div> */
