import React from 'react';
import fondo from "../assets/img/fondo.jpg"
import comanda from "../assets/img/comanda.png"
import BotonModalIcono from "../componentes/BotonModalIcono"
const Comanda = () => {
    return (
        <div className="fondo">
             
        <img src={fondo} alt="fondo" className="fondo__img" /> 
       
        <div className="fondo__blur d-flex align-items-center justify-content-center">
            
            <div className="mx-auto text-center opacity__2">
                
            <img src={comanda} alt="comanda"  className="drop w-75"/>
           
            </div>
            
            <textarea name="comanda" id="comanda" cols="30" rows="5" className="px-0 text__area mx-auto" placeholder="Escribe aqui..."></textarea>
            
            <div className="col-5 px-3 boton__Absoluto text-end ">
         
            <BotonModalIcono name="fas fa-check" nombreModal="#alerta" />
            </div>
            

        </div>
   </div>
    );
};

export default Comanda;