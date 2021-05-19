import React from 'react';
import BotonCategoria from "./BotonCategoria"

const BarraCategoria = () => {
    return (
    <ul className="nav nav-pills mb-3  justify-content-center justify-content-xl-start " id="pills-tab" role="tablist">
        <li className="nav-item " role="presentation">
            <BotonCategoria nombre="Platos del dia" id="pills-dia-tab" target="#pills-dia" control="pills-dia" select="true" activo="active"/>
        </li>
        <li className="nav-item " role="presentation">
            <BotonCategoria nombre="Platos especiales" id="pills-especiales-tab" target="#pills-especiales" control="pills-especiales" select="false" />
        </li>
        <li className="nav-item " role="presentation">
            <BotonCategoria nombre="Postre" id="pills-postre-tab" target="#pills-postre" control="pills-postre" select="false" />
        </li>
    </ul>

    );
};

export default BarraCategoria;