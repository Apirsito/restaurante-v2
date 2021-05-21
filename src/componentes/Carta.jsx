import React from 'react';

const Carta = (props) => {
    return (
    <div className="card mb-3 carta shadow">
        <div className="row g-0">
          <div className="col-md-4 col-4 d-md-flex align-items-center">
            <img src={props.imagen} alt={props.imagen} className="img-fluid drop2" />
          </div>
          <div className="col-md-8 col-8">
            <div className="card-body">
              <h3 className="card-title texto__tipo1"><strong>{props.nombre}</strong></h3>
              <p className="card-text texto__tipo2">{props.texto}</p>
              <p className="card-text"><strong className="texto__tipo2">{props.precio}</strong></p>
            </div>
          </div>
        </div>
    </div>
    );
};

export default Carta;