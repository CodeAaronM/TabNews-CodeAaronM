import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Jumbotron = () => {
    return (
        <>
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-black mb-5">
                <div className="col-md-6 p-lg-5 mx-auto my-5 bg-black">
                    <h1 className="display-3 fw-bold text-light">Bienvenido a TapNews</h1>
                    <h3 className="fw-normal text-light mb-3">Inicia Sesión para explorar las últimas noticias a tu manera.</h3>
                    <div className="d-flex gap-3 justify-content-center lead fw-normal">
                        <Link to="/login" className="text-light mx-5 m-2">
                            Iniciar Sesión
                        </Link>
                        <Link to="/home" className="text-light mx-5 m-2">
                            Ver noticias
                        </Link>
                    </div>
                </div>
                <div className="product-device shadow-sm d-none d-md-block"></div>
                <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
            </div>

            <div className="container-fluid row p-0 m-0 my-5">
                <div className="text-bg-dark p-0 text-center overflow-hidden col-6 border border-black pb-2">
                    <div className="my-3 py-3">
                        <h2 className="display-5">Noticias actualizadas!</h2>
                        <p className="lead">Explora las noticias del momento</p>
                    </div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdp4scwPo29nBQkoGBNgw7nVPZ8WYcpt_GUw&s" style={{width: "80%", height: "300px", borderRadius: "21px 21px 0 0"}} alt="Noticias actualizadas"/>
                </div>
                <div className="text-bg-dark p-0 text-center overflow-hidden col-6 border border-black pb-2">
                    <div className="my-3 py-3">
                        <h2 className="display-5">Filtra tus noticias!</h2>
                        <p className="lead">Mira solo lo que quieres ver</p>
                    </div>
                    <img src="https://cmdgroup.es/wp-content/uploads/2017/04/content-curation-2-300x246.jpg" style={{width: "80%", height: "300px", borderRadius: "21px 21px 0 0"}} alt="Filtra tus noticias"/>
                </div>
            </div>

            <div className="container-fluid row p-0 m-0 mb-5">
                <div className="text-bg-dark p-0 text-center overflow-hidden col-6 border border-black pb-2">
                    <div className="my-3 py-3">
                        <h2 className="display-5">Crea tu propia cuenta!</h2>
                        <p className="lead">Registrate en solo 2 minutos</p>
                    </div>
                    <img src="https://josefacchin.com/wp-content/uploads/2019/12/iniciar-sesion-twitter.png" style={{width: "80%", height: "300px", borderRadius: "21px 21px 0 0"}} alt="Crea tu propia cuenta"/>
                </div>
                <div className="text-bg-dark p-0 text-center overflow-hidden col-6 border border-black pb-2">
                    <div className="my-3 py-3">
                        <h2 className="display-5">Personaliza tus preferencias!</h2>
                        <p className="lead">Se guardarán tus preferencias cuando vuelvas</p>
                    </div>
                    <img src="https://www.logicommerce.com/es/wp-content/uploads/sites/4/shutterstock_2156724909-1024x769.jpg" style={{width: "80%", height: "300px", borderRadius: "21px 21px 0 0"}} alt="Personaliza tus preferencias"/>
                </div>
            </div>

            <div className="container-fluid row p-0 m-0 mb-5">
                <div className="text-bg-dark p-0 text-center overflow-hidden col-6 border border-black pb-2">
                    <div className="my-3 py-3">
                        <h2 className="display-5">Fuentes verificables!</h2>
                        <p className="lead">Redireccionate con un solo click</p>
                    </div>
                    <img src="https://www.telemundo.com/sites/nbcutelemundo/files/images/article/cover/2021/04/21/tverifica_illustration_v6.png" style={{width: "80%", height: "300px", borderRadius: "21px 21px 0 0"}} alt="Fuentes verificables"/>
                </div>
                <div className="text-bg-dark p-0 text-center overflow-hidden col-6 border border-black pb-2">
                    <div className="my-3 py-3">
                        <h2 className="display-5">Descripciones breves!</h2>
                        <p className="lead">Entérate rápidamente de lo que trata la noticia</p>
                    </div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3cS5SlqvMiBOJV3Mx5HKbSVBrnN_iNeZcNA&s" style={{width: "80%", height: "300px", borderRadius: "21px 21px 0 0"}} alt="Descripciones breves"/>
                </div>
            </div>
        </>
    );
};
