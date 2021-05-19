import React from 'react';
import Carta from "./Carta"
import img1 from "../assets/img/imagen1.png"
const PlatosDia = () => {
    return (
        <div className="tab-pane fade show active" id="pills-dia" role="tabpanel" aria-labelledby="pills-home-dia">

        <div className="row justify-content-around">
            <Carta imagen={img1} nombre="Carne en salsa" texto="Carne sudada, bañada en salsa de carne, con papas fritas de acompañante" precio="$10.000" />
            <Carta imagen={img1} nombre="Cerdo al chimichirry" texto="Cerdo asado a la plancha con salsa chimichurry" precio="$10.000" />
            <Carta imagen={img1} nombre="Goulash" texto="picada de verduras cocinadas, con carne y pollo" precio="$10.000" />
            <Carta imagen={img1} nombre="Ajiaco" texto="Sopa de ajuaco con pollo desminujado y crema de leche" precio="$10.000" />
            <Carta imagen={img1} nombre="Cerdo a la parrilla" texto="Cerdo asado a la parrilla " precio="$10.000" />
            <Carta imagen={img1} nombre="Pechuga a la plancha" texto="Pechuga asada a la plancha" precio="$10.000" />


        </div>
    </div>
    );
};

export default PlatosDia;