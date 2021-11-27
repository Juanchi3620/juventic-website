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
import EditarServicio from './Components/Administrador/Servicios/EditarServicio'
import VerServicios from './Components/Administrador/Servicios/VerServicios';
import AgregarServicio from './Components/Administrador/Servicios/AgregarServicio';
import EditarRestaurante from './Components/Administrador/Nosotros/EditarRestaurante';
import VerRestaurante from './Components/Administrador/Nosotros/VerRestaurante';


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
          <Route path="/servicios/editar/:id">
              <EditarServicio></EditarServicio>
            </Route>
            <Route path="/servicios/ver">
              <VerServicios></VerServicios>
            </Route>
            <Route path="/servicios/agregar">
              <AgregarServicio></AgregarServicio>
            </Route>
            <Route path="/nosotros/editar/:id">
              <EditarRestaurante></EditarRestaurante>
            </Route>
            <Route path="/nosotros/ver">
              <VerRestaurante></VerRestaurante>
            </Route>
        </Switch>
   
        </Layout>
      </BrowserRouter>
      
    </>
  );
}

export default App;
