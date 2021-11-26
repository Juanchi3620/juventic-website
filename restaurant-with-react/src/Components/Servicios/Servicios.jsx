import React, { Component } from 'react';
import Cabecera from './Cabecera';
import TiposServices from './TiposServices';
import "./Styles/servicio.css" 
import Constantes from "./Constantes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Servicios extends Component {
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
            <>
                <div className="prinServices">
                    <Cabecera/>
                    
                    <div className="Contenido">
                        <div className="row align-items-start">
                            {this.state.servicios.map(servicio => {
                                return <TiposServices key={servicio.id} servicio={servicio}></TiposServices>;
                            })}
                        </div>
                    </div>

                    
                    
                </div>
                
            </>
        );
    }
}

export default Servicios;
