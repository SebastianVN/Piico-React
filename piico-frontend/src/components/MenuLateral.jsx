import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function MenuLateral (){
        return (
            <div className="sidebar-menu">
            <div className="sidebar-header">
                <div className="logo">
                    <a href="index3.html"><img src="assets/images/icon/iconoPiico.png" alt="logo"/></a>
                    <h3 className="text-white">PIICO</h3>
                    <h5 className="text-white">Cloud</h5>
                </div>
            </div>
            <div className="main-menu">
                <div className="menu-inner">
                    <nav>
                        <ul className="metismenu" id="menu">
                            <li className="active">
                                <a href="index3.html" aria-expanded="true"><i
                                        className="ti-dashboard"></i><span>Dashboard</span></a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" aria-expanded="true"><i
                                        className="ti-pie-chart"></i><span>Variables Ambientales</span></a>
                                <ul className="collapse">
                                    <li><a href="temperatura.html">Temperatura</a></li>
                                    <li><a href="humedad.html">Humedad</a></li>
                                    <li><a href="pluviometro.html">Pluviometró</a></li>
                                    <li><a href="radiacion.html">Radiación</a></li>
                                    <li><a href="anemometro.html">Anemómetro</a></li>
                                    <li><a href="direccionDelViento.html">Dirección del Viento</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:void(0)" aria-expanded="true"><i
                                        className="ti-palette"></i><span>Actuadores</span></a>
                                <ul className="collapse">
                                    <li><a href="accordion.html">Aspersor de agua</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:void(0)" aria-expanded="true"><i
                                        className="ti-palette"></i><span>Red</span></a>
                                <ul className="collapse">
                                    <li><a href="gateway.html">Gateway</a></li>
                                    <li><a href="#">Broker</a>
                                        <ul className="collapse">
                                            <li><a href="publicador.html">Publicador</a></li>
                                            <li><a href="suscriptor.html">Suscriptor</a></li>
                                        </ul> 
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="/" aria-expanded="true"><i className="ti-palette"></i><span>Regresar a pagina
                                        Principal</span></a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        );
}
export default MenuLateral;
