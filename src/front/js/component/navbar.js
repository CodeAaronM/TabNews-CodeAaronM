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

  const isOnHomePage = location.pathname === "/homePage";
  const isOnAdminPage = location.pathname === "/AdministratorHomePage";

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <i className="fa-solid fa-kiwi-bird fs-1"></i> TapNews
        </Link>
        <div className="ml-auto">
          {(isOnHomePage || isOnAdminPage) && (
            <button className="btn btn-danger" onClick={handleLogout}>
              Cerrar Sesión
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};
