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
                    <span className="navbar-brand mb-0 h1 text-light">TapNews</span>
                </Link>
                <div className="ml-auto">
                    <Link to="/login">
                        <button className="btn btn-primary bg-purple text-light">Iniciar Sesión</button>
                    </Link>
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