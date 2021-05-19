import React from 'react';


const BotonCategoria = (props) => {
    
       return (
        
         <button className={"nav-link btn border border-dark border-3 shadow mx-md-2 texto__tipo2 text-dark  mx-auto" + " " + props.activo} id={props.id} data-bs-toggle="pill" data-bs-target={props.target} type="button" role="tab" aria-controls={props.control} aria-selected={props.select}><strong>{props.nombre}</strong></button>
    );
};

export default BotonCategoria;