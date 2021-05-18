import React from 'react';

const ModalEliminar = (props) => {
    return (
        <>
    
        <div className="modal fade" id={props.id}  aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content shadow">
              <div className="modal-header mx-auto">
                       
               
              
                <h1 className="text-center">{props.name}</h1>
           
             
              </div>
              <div className="modal-body text-center">
               <h3>¿Estas Seguro que deseas eliminar?</h3>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger hover__sombra" data-bs-dismiss="modal">Cancelar</button>
                <a type="button"  href="#" className="btn btn-success hover__sombra">Eliminar</a>
              </div>
            </div>
          </div>
        </div>
        </>
    );
};

export default ModalEliminar;