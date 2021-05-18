import React from 'react';

const BotonModalIcono = (props) => {
    return (
        <button type="button" className="btn bg-light border border-dark shadow m-2 border-2  hover__agrandar" data-bs-toggle="modal" data-bs-target={props.nombreModal}>
        <i className={props.name}></i>
       </button>
    );
};

export default BotonModalIcono;