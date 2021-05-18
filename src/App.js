import Login from "./componentes/Login"
import "./assets/css/estilos.css"
import ModalIngreso from "./componentes/ModalIngreso";
import ModalRegistro from "./componentes/ModalRegistro";
import Crud from "./componentes/Crud";
import ModalAdmin from "./componentes/ModalAdmin";
import ModalEliminar from "./componentes/ModalEliminar";
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
          <ModalEliminar id="eliminar" name="ELIMINAR" />

          <Crud />
        </Route>

      </Switch>
    </Router>





  );
}

export default App;
