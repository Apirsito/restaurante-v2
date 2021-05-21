import React from 'react';
import Carta from "./Carta"
import img1 from "../assets/img/imagen1.png"
import img7 from "../assets/img/imagen7.png"
import img8 from "../assets/img/imagen8.png"
import img9 from "../assets/img/imagen9.png"
import img10 from "../assets/img/imagen10.png"

const PlatosEspeciales = () => {
    return (
        <div className="tab-pane fade" id="pills-especiales" role="tabpanel" aria-labelledby="pills-especiales-tab">
        <div className="row justify-content-around">
            <Carta imagen={img10} nombre="Costillas BBQ" texto="Este es el producto especial de nustras instalacion, podra degustar de un acompañamiento de papas fritas, salsa BBQ y mucho mas" precio="$15.000" />
            <Carta imagen={img1} nombre="Churrasquito" texto="Este es el producto estrella de nustras instalacion, podra degustar  carne a la parrilla con salsa chimichurry, mas ensalada, mas arroz, mas papas, mas sopa." precio="$13.000" />
            <Carta imagen={img7} nombre="Lomo de cerdo" texto="Porcion grande de lomo de cerdo, acompañada de papas a la francesa" precio="$16.000" />
            <Carta imagen={img8} nombre="Churrasco" texto="Porcion grande de carne de vaca, acompañada de papas a la francesa" precio="$17.000" />
            <Carta imagen={img9} nombre="Mojarra dorada" texto="Pescado frito acompañado de arroz, papas, sopa y ensalada" precio="$13.000" />

        </div>
    </div>
    );
};

export default PlatosEspeciales;