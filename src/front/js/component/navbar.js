// navbar.js
import React, { useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { actions } = useContext(Context);
    const navigate = useNavigate();
    const location = useLocation(); // Obtén la ruta actual

    const handleLogout = () => {
        actions.logout(); // Llama a la acción de logout
        navigate("/login"); // Redirige a la página de login
    };

    // Verifica si la ruta actual es HomePage o AdministratorHomePage
    const isOnHomePage = location.pathname === "/homePage";
    const isOnAdminPage = location.pathname === "/administratorHomePage";

    return (
        <nav className="navbar navbar-light bg-dark">
            <div className="container">
                <Link to="/">
                    <span className="navbar-brand mb-0 fs-3 text-light"><i className="fa-solid fa-kiwi-bird fs-1"></i>TapNews</span>
                </Link>
                <div className="ml-auto">
                    {/* Mostrar el botón "Cerrar Sesión" solo en HomePage y AdministratorHomePage */}
                    {(isOnHomePage || isOnAdminPage) && (
                        <button className="btn btn-danger ml-2" onClick={handleLogout}>
                            Cerrar Sesión
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
};