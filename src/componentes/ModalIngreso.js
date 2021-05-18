import React from 'react';
import img1 from "../assets/img/imagen1.png"
const ModalIngreso = () => {
    return (
        <>
{/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
 Ingresar
</button> */}
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
        <form>
        <div className="mb-3 px-3">
            <input type="email" className="form-control text-center" id="email" placeholder="USUARIO"/>
          
        </div>    
        <div className="mb-3 px-3">
            
            <input type="password" className="form-control text-center" id="pass" placeholder="CONTRASEÑA"/>
          
        </div>             
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-danger hover__sombra" data-bs-dismiss="modal">Salir</button>
        <a type="button"  href="Crud.js" className="btn btn-success hover__sombra">Ingresar</a>
      </div>
    </div>
  </div>
</div>
</>
    );
};

export default ModalIngreso;