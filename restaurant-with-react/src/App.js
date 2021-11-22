import './App.css';
import Layout from './Components/Layout';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Nosotros from './Components/Nosotros/Nosotros';
import Servicios from './Components/Servicios/Servicios.jsx';
import Reserva from './Components/Reserva/Reserva';
import Inicio from './Components/Inicio/Inicio';
import Menu from './Components/Menu/Menu';
import Login from './Components/auth/Login'
import NuevaCuenta from './Components/auth/NuevaCuenta';
import Carrito from './Components/Carrito/Carrito'
import WantEdit from './Components/Administrador/WantEdit';

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
        <Switch>
          <Route exact path="/" component= {Inicio} />
          <Route exact path="/Nosotros" component= {Nosotros} />
          <Route exact path="/Servicios" component= {Servicios} />
          <Route exact path="/Reservas" component= {Reserva} />
          <Route exact path="/Menu" component= {Menu} />
          <Route exact path="/IniciarSesion" component= {Login} />
          <Route exact path="/nueva-cuenta" component= {NuevaCuenta} />
          <Route exact path="/Carrito" component= {Carrito} />
          <Route exact path="/Editar" component= {WantEdit} />
        </Switch>
   
        </Layout>
      </BrowserRouter>
      
    </>
  );
}

export default App;
