import React from 'react';
import Carta from "./Carta"
import img1 from "../assets/img/imagen1.png"
const Postres = () => {
    return (
        <div className="tab-pane fade" id="pills-postre" role="tabpanel" aria-labelledby="pills-postre-tab">
        <div className="row justify-content-around">
            <Carta imagen={img1} nombre="Arroz con leche" texto="Arroz con leche " precio="$5.000" />
            <Carta imagen={img1} nombre="Conos de helado" texto="Cono de helado con una bola" precio="$1.500" />
            <Carta imagen={img1} nombre="Cono doble" texto="Cono de helado doble" precio="$3.000" />

        </div>
    </div>
    );
};

export default Postres;