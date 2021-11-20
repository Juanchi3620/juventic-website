import React, { useState } from "react";
import { sendMail } from "./enviar_email_reservas";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Formulario = () => {
  const initialReserva = {
    nombres: "",
    email: "",
    telefono: "",
    servicio: "",
    num_personas: "",
    fecha: "",
    terminos: "",
    observacion: "",
  };

  const [form, setForm] = useState(initialReserva);

  const enviarCorreo = (formul) => {
    sendMail(formul);
    MySwal.fire("Reserva exitosa").then((result) => {
      console.log(result);
      if (result.isConfirmed || result.isDismissed) {
        setForm(initialReserva);
      }
    });
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleChecked = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    enviarCorreo(form);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        id="reservas"
        className="col-sm-6"
        style={{ marginBottom: "2rem" }

      }
      >
        <div className="form-group">
          <select
            className="form-control"
            name="servicio"
            id="servicio"
            placeholder="Seleccionar el servicio"
            onChange={handleChange}
            defaultValue=""
            value={form.servicio}
            style={{fontSize:"2rem"}}
          >
            <option>Seleccionar el servicio</option>
            <option>Celebración de Cumpleaños</option>
            <option>Aniversarios</option>
            <option>Fiestas Infantiles</option>
            <option>Declaraciones o propuestas</option>
            <option>Despedidas</option>
            <option>Cena con amigos</option>
          </select>
        </div>
        <div className="form-group">
          <input
            type="text"
            name="nombres"
            className="form-control "
            id="nombres"
            value={form.nombres}
            placeholder="Nombre completo"
            style={{fontSize:"2rem"}}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            name="telefono"
            className="form-control "
            id="telefono"
            value={form.telefono}
            placeholder="Telefono y/o celular"
            onChange={handleChange}
            style={{fontSize:"2rem"}}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            className=" form-control"
            id="email"
            value={form.email}
            placeholder="Correo electrónico"
            onChange={handleChange}
            style={{fontSize:"2rem"}}
          />
        </div>
        <div className="form-group">
          <input
            type="datetime-local"
            id="fecha"
            name="fecha"
            value={form.fecha}
            onChange={handleChange}
            style={{fontSize:"2rem"}}
          />
        </div>

        <div className="form-group">
          <input
            min={1}
            id="num_personas"
            name="num_personas"
            type="number"
            value={form.num_personas}
            className="form-control"
            placeholder="Número de Personas"
            onChange={handleChange}
            style={{fontSize:"2rem"}}
          />
        </div>
        <div>
          <textarea
            className="form-control "
            name="observacion"
            rows={5}
            id="mensaje"
            placeholder="Indicaciones especiales"
            defaultValue={"Sin palabras"}
            value={form.observacion}
            onChange={handleChange}
            style={{fontSize:"2rem"}}
          />
        </div>
        <div className="form-check">
          <label className="form-check-label">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
              name="terminos"
              value={form.terminos}
              onChange={handleChecked}
              style={{fontSize:"2rem"}}
            />
            Acepto terminos y condiciones
          </label>
        </div>
        <div className="btn_enviar">
          <button
            id="submit-reservas"
            type="submit"
            className="btn naranja w-50 text-white"
            style={{fontSize:"1.5rem"}}
          >
            ENVIAR
          </button>
        </div>
      </form>
    </>
  );
};

export default Formulario;
