import React, { Component } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header'

class Layout extends Component {
    render() {
        return (
            <>
                <div className="Wrapper">
                    <Header />
                    <br/>
                    <br/> 
                    <div className="contenedor">
                        {this.props.children}
                    </div>
                    <Footer/>

                </div>
                
            </>


        );
    }
}

export default Layout;
