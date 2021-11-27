import React from 'react';
import Constantes from "../../Servicios/Constantes";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, withRouter } from 'react-router-dom';

class EditarRestaurante extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurante: {
                id: "",
                "imagen": "",
                "nombre": "",
                "descripcion": "",
            },
        };
        // Indicarle a las funciones a quién nos referimos con "this"
        this.manejarCambio = this.manejarCambio.bind(this);
        this.manejarEnvioDeFormulario = this.manejarEnvioDeFormulario.bind(this);
    }
    async componentDidMount() {
        // Obtener ID de URL
        const idRestaurante = this.props.match.params.id;
        // Llamar a la API para obtener los detalles
        const respuesta = await fetch(`${Constantes.RUTA_API}/obtenerRestaurante.php?id=${idRestaurante}`);
        const restaurante = await respuesta.json();
        // "refrescar" el formulario
        this.setState({
            restaurante: restaurante,
        });
    }
    render() {
        return (
            <div className="column is-one-third">
                <h1 className="is-size-3">Editando la información del Restaurante</h1>
                <ToastContainer></ToastContainer>
                <form className="field" onSubmit={this.manejarEnvioDeFormulario}>
                    <div className="form-group">
                        <label className="label" htmlFor="imagen">Imagen:</label>
                        <input required placeholder="Imagen" type="textarea" id="imagen" onChange={this.manejarCambio} value={this.state.restaurante.imagen} className="input" />
                    </div>

                    <div className="form-group">
                        <label className="label" htmlFor="nombre">Nombre:</label>
                        <input autoFocus required placeholder="Nombre" type="text" id="nombre" onChange={this.manejarCambio} value={this.state.restaurante.nombre} readonly="readonly" className="input" />
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="descripcion">Descripción:</label>
                        <input required placeholder="Descripción" type="textarea" id="descripcion" onChange={this.manejarCambio} value={this.state.restaurante.descripcion} className="input" />
                    </div>

                    <div className="form-group">
                        <button className="button is-success mt-2">Guardar</button>
                        &nbsp;
                        <Link to="/Editar" className="button is-primary mt-2">Volver</Link>
                    </div>
                </form>
            </div>
        );
    }
    async manejarEnvioDeFormulario(evento) {

        evento.preventDefault();
        // Codificar nuestro videojuego como JSON

        const cargaUtil = JSON.stringify(this.state.restaurante);
        // ¡Y enviarlo!
        const respuesta = await fetch(`${Constantes.RUTA_API}/actualizarRestaurante.php`, {
            method: "PUT",
            body: cargaUtil,
        });
        const exitoso = await respuesta.json();
        if (exitoso) {
            toast('Información guardada', {
                position: "top-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            
        } else {
            toast.error("Error guardando. Intenta de nuevo");
        }
    }
    manejarCambio(evento) {
        // Extraer la clave del estado que se va a actualizar, así como el valor
        const clave = evento.target.id;
        let valor = evento.target.value;
        this.setState(state => {
            const restauranteActualizado = state.restaurante;
            // Si es la calificación o el nombre, necesitamos castearlo a entero
            /* if (clave !== "nombre") {
                //valor = parseFloat(valor);
            } */
            // Actualizamos el valor del videojuego, solo en el campo que se haya cambiado
            restauranteActualizado[clave] = valor;
            return {
                restaurante: restauranteActualizado,
            }
        });
    }
}

export default withRouter(EditarRestaurante);