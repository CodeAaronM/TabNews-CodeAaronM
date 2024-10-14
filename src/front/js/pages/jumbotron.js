import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Jumbotron = () => {


    return (
<>

                    <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-black">
                        <div className="col-md-6 p-lg-5 mx-auto my-5 bg-black">
                            <h1 className="display-3 fw-bold text-light">Bienvenido a TapNews</h1>
                            <h3 className="fw-normal text-light mb-3">Inicia Sesión para explorar las últimas noticias a tu manera.</h3>
                            <div className="d-flex gap-3 justify-content-center lead fw-normal">
                            <Link to="/login">
                        <a className="text-light mx-5 m-2">Iniciar Sesión</a>
                    </Link>
                    <Link to="/home">
                        <a className="text-light mx-5 m-2">Ver noticias</a>
                    </Link>
                            </div>
                        </div>
                        <div className="product-device shadow-sm d-none d-md-block"></div>
                        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
                    </div>

                    <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3 row">
                        <div className="text-bg-dark p-0 text-center overflow-hidden col-6">
                            <div className="my-3 py-3">
                                <h2 className="display-5">Another headline</h2>
                                <p className="lead">And an even wittier subheading.</p>
                            </div>
                            <div className="bg-body-tertiary shadow-sm mx-auto" style={{width: "80%", height: "300px", borderradius: "21px 21px 0 0"}}></div>
                        </div>
                        <div className="text-bg-dark p-0 text-center overflow-hidden col-6">
                            <div className="my-3 py-3">
                                <h2 className="display-5">Another headline</h2>
                                <p className="lead">And an even wittier subheading.</p>
                            </div>
                            <div className="bg-body-tertiary shadow-sm mx-auto" style={{width: "80%", height: "300px", borderradius: "21px 21px 0 0"}}></div>
                        </div>
                    </div>

                    <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3 row">
                        <div className="text-bg-dark p-0 text-center overflow-hidden col-6">
                            <div className="my-3 py-3">
                                <h2 className="display-5">Another headline</h2>
                                <p className="lead">And an even wittier subheading.</p>
                            </div>
                            <div className="bg-body-tertiary shadow-sm mx-auto" style={{width: "80%", height: "300px", borderradius: "21px 21px 0 0"}}></div>
                        </div>
                        <div className="text-bg-dark p-0 text-center overflow-hidden col-6">
                            <div className="my-3 py-3">
                                <h2 className="display-5">Another headline</h2>
                                <p className="lead">And an even wittier subheading.</p>
                            </div>
                            <div className="bg-body-tertiary shadow-sm mx-auto" style={{width: "80%", height: "300px", borderradius: "21px 21px 0 0"}}></div>
                        </div>
                    </div>
                    <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3 row">
                        <div className="text-bg-dark p-0 text-center overflow-hidden col-6">
                            <div className="my-3 py-3">
                                <h2 className="display-5">Another headline</h2>
                                <p className="lead">And an even wittier subheading.</p>
                            </div>
                            <div className="bg-body-tertiary shadow-sm mx-auto" style={{width: "80%", height: "300px", borderradius: "21px 21px 0 0"}}></div>
                        </div>
                        <div className="text-bg-dark p-0 text-center overflow-hidden col-6">
                            <div className="my-3 py-3">
                                <h2 className="display-5">Another headline</h2>
                                <p className="lead">And an even wittier subheading.</p>
                            </div>
                            <div className="bg-body-tertiary shadow-sm mx-auto" style={{width: "80%", height: "300px", borderradius: "21px 21px 0 0"}}></div>
                        </div>
                    </div>
                    </>

    );
};
