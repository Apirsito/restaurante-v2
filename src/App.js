import Login from "./componentes/Login"
import "./assets/css/estilos.css"
import ModalIngreso from "./componentes/ModalIngreso";
import ModalRegistro from "./componentes/ModalRegistro";
import Crud from "./componentes/Crud";
import ModalAdmin from "./componentes/ModalAdmin";
import ModalNotificacion from "./componentes/ModalNotificacion";
import Comanda from "./componentes/Comanda"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"



function App() {
  return (

    <Router>

      <Switch>
        <Route path="/" exact>
          <Login />
          <ModalIngreso />
          <ModalRegistro />
        </Route>

        <Route path="/crud">

          <ModalAdmin id="agregar" name="AGREGAR" boton="Agregar" />
          <ModalAdmin id="editar" name="EDITAR" boton="Actualizar" />
          <ModalNotificacion id="eliminar" name="ELIMINAR" texto="¿Estas seguro que deseas eliminar?" nombreBoton="ELIMINAR" />
        

          <Crud />
        </Route>

        <Route path="/comanda">
        <Comanda/>
        <ModalNotificacion id="alerta" name="ALERTA" texto="¿Estas seguro que eso es lo que quieres pedir, recuerda especificar todo lo posible?"  nombreBoton="PEDIR"/>
        </Route>

        

      </Switch>
    </Router>





  );
}

export default App;
