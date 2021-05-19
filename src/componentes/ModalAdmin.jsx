import React from 'react';

const ModalAdmin = (props) => {
    return (
        <>
    
        <div className="modal fade" id={props.id}  aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content shadow">
              <div className="modal-header mx-auto">
                       
               
              
                <h1 className="text-center">{props.name}</h1>
           
             
              </div>
              <div className="modal-body">
                <form id={props.boton}>
                <div className="mb-3 px-3">
                    <input type="text" className="form-control text-center" id="codigo" placeholder="USUARIO" required/>
                  
                </div>    
                <div className="mb-3 px-3">
                    <input type="text" className="form-control text-center" id="descripcion" placeholder="DESCRIPCION" required/>
                  
                </div>    
                <div className="mb-3 px-3">
                    <input type="time" className="form-control text-center" id="cantidad" placeholder="HORA" required/>
                  
                </div> 
                <div className="mb-3 px-3">
                    <input type="text" className="form-control text-center" id="estado" placeholder="ESTADO" required/>
                  
                </div>                
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger hover__sombra" data-bs-dismiss="modal">Salir</button>
                <button type="submit" form={props.boton} className="btn btn-success hover__sombra">{props.boton}</button>
              </div>
            </div>
          </div>
        </div>
        </>
    );
};

export default ModalAdmin;