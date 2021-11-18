import React, { Component } from 'react';
import Cabecera from './Cabecera';
import { TiposServices } from './TiposServices';
import "./Styles/servicio.css" 

class Servicios extends Component {
    render() {
        return (
            <>
                <div className="prinServices">
                    <Cabecera/>
                    
                    <TiposServices/>
                    

                    
                    
                </div>
                
            </>
        );
    }
}

export default Servicios;
