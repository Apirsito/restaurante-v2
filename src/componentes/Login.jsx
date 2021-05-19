import React from 'react';
import fondo from "../assets/img/fondo.png"
import BotonModal from "./BotonModal"
import Carta from "./Carta"
import img1 from "../assets/img/imagen1.png"

import BarraCategoria from './BarraCategoria';
import PlatosDia from './PlatosDia';
import PlatosEspeciales from './PlatosEspeciales';
import Postres from './Postres';
const Login = () => {
    return (
        <div className="fondo">

            <img src={fondo} alt="fondo" className="fondo__img" />

            <div className="fondo__blur">


                <div className="col-12 text-md-end text-center">
                    <BotonModal name="ingresar" clase="btn bg-dark text-white mt-4 m-md-2 col-11  col-sm-8 col-md-auto" nombreModal="#ingreso" />
                    <BotonModal name="Registrarse" clase="btn bg-light m-md-2 mt-2 col-11  col-sm-8 col-md-auto" nombreModal="#registro" />

                </div>


               <div className="container my-md-5">
                    <div className=" my-3  ">

                        <BarraCategoria/>

                        <div className="tab-content h " id="pills-tabContent">
                            <PlatosDia/>
                           <PlatosEspeciales/>
                            <Postres/>
                        </div>


                    </div>

                </div>


            </div>



        </div>
    );
};

export default Login;