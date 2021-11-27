import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import Constantes from '../../Servicios/Constantes';
class TableRestaurante extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            // Si han eliminado este juego, no necesitamos mostrarlo
            eliminado: false,
        };
        this.redireccionarParaEditar = this.redireccionarParaEditar.bind(this);
    }
    redireccionarParaEditar() {
        return <Redirect to={`/nosotros/editar/${this.props.restaurante.id}`} />
    }
    render() {
        return (
            <tr>
                <td>{this.props.restaurante.imagen}</td>
                <td>{this.props.restaurante.nombre}</td>
                <td>{this.props.restaurante.descripcion}</td>
                <td>
                    <Link to={`/nosotros/editar/${this.props.restaurante.id}`} className="button is-info">Editar</Link>
                </td>
            </tr>
        );
    }
}

export default TableRestaurante;