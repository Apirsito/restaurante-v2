import React from 'react';
import fondo from "../assets/img/fondo.png"
const Crud = () => {
  return (

    <div className="fondo">

      <img src={fondo} alt="fondo" className="fondo__img" />

      <div className="fondo__blur">

        <div className="container col-10 mx-auto my-5">
          <div className="table-responsive borde__redondeado ">
            <table id="tablaProductos" className="table table-bordered align-middle shadow border-dark" >
              <thead>
                <tr className="bg-dark text-light">
                  <th scope="col"><h2 className="text-center"><strong>CODIGO</strong></h2></th>
                  <th scope="col"><h2 className="text-center"><strong>DESCRIPCIÓN</strong></h2></th>
                  <th scope="col"><h2 className="text-center"><strong>CANTIDAD</strong></h2></th>
                  <th scope="col"><h2 className="text-center"><strong>ACCIONES</strong></h2></th>
                </tr>
              </thead>
              <tbody id="bodyProductos" className="bg-light text-center">

              <tr>
                <th scope="row"><h4><strong>20161145958</strong></h4></th>
                <td><h4><strong>Patacon Pizza pequeño</strong></h4></td>
                <td><h4><strong>5</strong></h4></td>
                <td><h4><strong>Recibido</strong></h4></td>
              </tr>
              </tbody>

            </table>
          </div>

        </div>
      </div>
    </div>
    );
};

export default Crud;