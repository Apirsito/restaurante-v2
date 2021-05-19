import React from 'react';
import Carta from "./Carta"
import img1 from "../assets/img/imagen1.png"
const PlatosEspeciales = () => {
    return (
        <div className="tab-pane fade" id="pills-especiales" role="tabpanel" aria-labelledby="pills-especiales-tab">
        <div className="row justify-content-around">
            <Carta imagen={img1} nombre="Costillas BBQ" texto="Este es el producto especial de nustras instalacion, podra degustar de un acompañamiento de papas fritas, salsa BBQ y mucho mas" precio="$15.000" />
            <Carta imagen={img1} nombre="Churrasquito" texto="Este es el producto estrella de nustras instalacion, podra degustar  carne a la parrilla con salsa chimichurry, mas ensalada, mas arroz, mas papas, mas sopa." precio="$13.000" />
            <Carta imagen={img1} nombre="Lomo de cerdo" texto="Porcion grande de lomo de cerdo, acompañada de papas a la francesa" precio="$16.000" />
            <Carta imagen={img1} nombre="Churrasco" texto="Porcion grande de carne de vaca, acompañada de papas a la francesa" precio="$17.000" />
            <Carta imagen={img1} nombre="Mojarra dorada" texto="Pescado frito acompañado de arroz, papas, sopa y ensalada" precio="$13.000" />

        </div>
    </div>
    );
};

export default PlatosEspeciales;