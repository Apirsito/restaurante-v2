import React from 'react';

const BotonModal = (props) => {
    return (
        <button type="button" className={props.clase} data-bs-toggle="modal" data-bs-target={props.nombreModal}>
     <strong>{props.name}</strong>
        </button>
    );
};

export default BotonModal;