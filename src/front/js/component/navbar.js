import React, { useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    actions.logout();
    navigate("/login");
  };

  // Verifica si la ruta actual está dentro de las vistas de administrador o contiene "add"
  const isAdminRoute = [
    "/administratorHomePage",
    "/article",
    "/author",
    "/category",
    "/category-details",
    "/edit-category",
    "/administratorLogin",
    "/administratorRegister",
    "/newspaper",        // Ruta para la vista Newspaper
    "/addnewspaper",     // Ruta para agregar un periódico
    "/editnewspaper"     // Ruta para editar un periódico
  ].some(path => location.pathname.includes(path));

  const isAddRoute = location.pathname.toLowerCase().includes("add");

  // Se determina la ruta de destino para el enlace "Inicio"
  const homeLink = isAdminRoute || isAddRoute ? "/administratorHomePage" : "/";

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to={homeLink} className="navbar-brand">
          <i className="fa-solid fa-kiwi-bird fs-1"></i> TapNews
        </Link>
        <div className="ml-auto">
          {/* Muestra "Iniciar Sesión" solo en la página de inicio */}
          {location.pathname === "/home" && (
            <Link to="/login" className="text-light mx-5 m-2">
              <button className="btn btn-primary">Iniciar Sesión</button>
            </Link>
          )}
          {/* Muestra "Cerrar Sesión" en otras rutas */}
          {(location.pathname === "/homePage" || isAdminRoute) && (
            <button className="btn btn-primary" onClick={handleLogout}>
              Cerrar Sesión
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};
