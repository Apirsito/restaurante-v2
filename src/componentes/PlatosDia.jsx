import React from 'react';
import Carta from "./Carta"
import img1 from "../assets/img/imagen1.png"
import img2 from "../assets/img/imagen2.png"
import img3 from "../assets/img/imagen3.png"
import img4 from "../assets/img/imagen4.png"
import img5 from "../assets/img/imagen5.png"
import img6 from "../assets/img/imagen6.png"
const PlatosDia = () => {
    return (
        <div className="tab-pane fade show active" id="pills-dia" role="tabpanel" aria-labelledby="pills-home-dia">

        <div className="row justify-content-around">
            <Carta imagen={img1} nombre="Carne en salsa" texto="Carne sudada, bañada en salsa de carne, con papas fritas de acompañante" precio="$10.000" />
            <Carta imagen={img2} nombre="Cerdo al chimichirry" texto="Cerdo asado a la plancha con salsa chimichurry" precio="$10.000" />
            <Carta imagen={img3} nombre="Goulash" texto="picada de verduras cocinadas, con carne y pollo" precio="$10.000" />
            <Carta imagen={img4} nombre="Ajiaco" texto="Sopa de ajuaco con pollo desminujado y crema de leche" precio="$10.000" />
            <Carta imagen={img5} nombre="Cerdo a la parrilla" texto="Cerdo asado a la parrilla " precio="$10.000" />
            <Carta imagen={img6} nombre="Pechuga a la plancha" texto="Pechuga asada a la plancha" precio="$10.000" />


        </div>
    </div>
    );
};

export default PlatosDia;