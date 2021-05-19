import React from 'react';
import fondo from "../assets/img/fondo.png"
import BotonModalIcono from './BotonModalIcono';
const Crud = () => {
  return (

    <div className="fondo">

      <img src={fondo} alt="fondo" className="fondo__img" />

      <div className="fondo__blur">

        <div className="container col-10 mx-auto my-5">
          <BotonModalIcono name="fas fa-plus"  nombreModal="#agregar"/>
          
          <div className="table-responsive borde__redondeado ">
            <table id="tablaProductos" className="table table-bordered align-middle shadow border-dark" >
              <thead>
                <tr className="bg-dark text-light">
                  <th scope="col"><h2 className="text-center"><strong>USUARIO</strong></h2></th>
                  <th scope="col"><h2 className="text-center"><strong>DESCRIPCIÓN</strong></h2></th>
                  <th scope="col"><h2 className="text-center"><strong>HORA</strong></h2></th>
                  <th scope="col"><h2 className="text-center"><strong>ESTADO</strong></h2></th>
                  <th scope="col"><h2 className="text-center"><strong>ACCIONES</strong></h2></th>
                  
                </tr>
              </thead>
              <tbody id="bodyProductos" className="bg-light text-center">

              <tr>
                <th scope="row"><h4><strong>Apirsito <br /> 3103020680</strong></h4></th>
                <td><h4><strong>2 Patacon Pizza pequeño <br /> 4 mazorcadas</strong></h4></td>
                <td><h4><strong>4:50</strong></h4></td>
                <td><h4><strong>Pendiente</strong></h4></td>
                <td className="px-0">
                <BotonModalIcono name="fas fa-edit"  nombreModal="#editar"/>
               
                <BotonModalIcono name="fas fa-trash-alt"  nombreModal="#eliminar" />
               
                 </td>
              
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