import React from 'react';
import fondo from "../assets/img/fondo.png"
import BotonModal from "./BotonModal"
const Login = () => {
    return (
        <div className="fondo">
             
             <img src={fondo} alt="fondo" className="fondo__img" /> 
            
             <div className="fondo__blur">
                 

            <div className="col-12 text-end">
            <BotonModal name="ingresar" clase="btn bg-dark text-white m-2 " nombreModal="#ingreso"/>
            <BotonModal name="Registrarse" clase="btn bg-light m-2" nombreModal="#registro"/>

            </div>

             </div>
        </div>
    );
};

export default Login;