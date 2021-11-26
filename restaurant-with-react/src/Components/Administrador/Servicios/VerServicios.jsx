import React from 'react';
import Constantes from "../../Servicios/Constantes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TableServicios from './TableServicios';
class VerServicios extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            servicios: [],
        };
    }
    async componentDidMount() {
        const respuesta = await fetch(`${Constantes.RUTA_API}/obtenerServicios.php`);
        const servicios = await respuesta.json();
        this.setState({
            servicios: servicios,
        });
    }
    render() {
        return (
            <div>
                <div className="column">
                    <h1 className="is-size-3">Servicios</h1>
                    <ToastContainer></ToastContainer>
                </div>
                <div className="table-container">
                    <table className="table is-fullwidth is-bordered">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Descripción</th>
                                <th>Imagen</th>
                                <th>Editar</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.servicios.map(servicio => {
                                return <TableServicios key={servicio.id} servicio={servicio}></TableServicios>;
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default VerServicios;