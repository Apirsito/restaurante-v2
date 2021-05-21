import React from 'react';
import img1 from "../assets/img/imagen1.png"
const ModalRegistro = () => {
    return (
        <>
{/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
 Ingresar
</button> */}
<div className="modal fade" id="registro" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content shadow">
      <div className="modal-header mx-auto">
               
        <div>
        <img src={img1} alt="imagen1" />
        <h1 className="text-center">REGISTRARSE</h1>
        </div>
     
      </div>
      <div className="modal-body">
        <form id="formularioRegistro" action="crud">
        <div className="mb-3 px-3">
            <input type="text" className="form-control text-center" id="user" placeholder="NOMBRE DE USUARIO" required/>
          
        </div>    
        <div className="mb-3 px-3">
            <input type="number" className="form-control text-center" id="num" placeholder="NUMERO DE CELULAR" required/>
          
        </div>    
        <div className="mb-3 px-3">
            
            <input type="password" className="form-control text-center" id="pass" placeholder="CONTRASEÑA" required/>
          
        </div>       
        <div className="mb-3 px-3">
            
            <input type="text" className="form-control text-center" id="direct" placeholder="DIRECCION" required/>
          
        </div>             
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-danger hover__sombra" data-bs-dismiss="modal">Salir</button>
        <button type="submit" form="formularioRegistro" className="btn btn-success hover__sombra">Registrarse</button>
      </div>
    </div>
  </div>
</div>
</>
    );
};

export default ModalRegistro;