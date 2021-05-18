import React from 'react';
import img1 from "../assets/img/imagen1.png"
const ModalIngreso = () => {
    return (
        <>

<div className="modal fade" id="ingreso" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content shadow">
      <div className="modal-header mx-auto">
               
        <div>
        <img src={img1} alt="imagen1" />
        <h1 className="text-center">INGRESAR</h1>
        </div>
     
      </div>
      <div className="modal-body">
        <form id="formularioIngreso" action="crud">
        <div className="mb-3 px-3">
            <input type="email" className="form-control text-center" id="email" placeholder="USUARIO" required/>
          
        </div>    
        <div className="mb-3 px-3">
            
            <input type="password" className="form-control text-center" id="pass" placeholder="CONTRASEÑA" required/>
          
        </div>             
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-danger hover__sombra" data-bs-dismiss="modal">Salir</button>
        <button type="submit" form="formularioIngreso"  className="btn btn-success hover__sombra">Ingresar</button>
      </div>
    </div>
  </div>
</div>
</>
    );
};

export default ModalIngreso;