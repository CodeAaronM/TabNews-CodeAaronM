import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const CardArticle = (props) => {
  const { store, actions } = useContext(Context);
  const [isCategoryDropdownVisible, setIsCategoryDropdownVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(props.category);

  // Manejar la edición
  const handleEdit = () => {
    actions.setid({
      id: props.id,
      title: props.title,
      content: props.content,
      image: props.image,
      published_date: props.published_date,
      source: props.source,
      link: props.link,
      author: props.author,
      newspaper: props.newspaper,
      category: props.category
    });
  };

  const handleChangeCategory = (category) => {
    setSelectedCategory(category);
    actions.updateArticleCategory(props.id, category.id); // Asumiendo que tienes esta función en tu store
    setIsCategoryDropdownVisible(false); // Ocultar el menú después de seleccionar
  };

  const handleRedirect = () => {
    if (props.link) {
      window.open(props.link, "_blank"); // Abre el link en una nueva pestaña
    }
  };

  return (
    <div className="card my-2 bg-dark text-light">
      {/* Al hacer clic en la imagen, redirige al enlace */}
      <img
        src={props.image || rigoImage}
        className="card-img-top"
        alt={props.title}
        onClick={handleRedirect}
        style={{ cursor: "pointer", height: "250px", objectFit: "cover" }} // Ajustar el tamaño de la imagen
      />
      <div className="card-body">
        {props.isAdmin && (
          <div className="d-flex justify-content-between">
            <Link to="/AddArticle">
              <button type="button" className="btn btn-outline-light text-secondary" onClick={handleEdit}>
                <i className="fa-solid fa-pencil"></i> Editar
              </button>
            </Link>
            <button type="button" className="btn btn-danger" onClick={() => actions.deleteArticle(props.id)}>
              Borrar
            </button>
            <button type="button" className="btn btn-warning" onClick={() => setIsCategoryDropdownVisible(!isCategoryDropdownVisible)}>
              Cambiar Categoría
            </button>
            {isCategoryDropdownVisible && (
              <div className="dropdown-menu show">
                {store.categories.map((category) => (
                  <button
                    key={category.id}
                    className="dropdown-item"
                    onClick={() => handleChangeCategory(category)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
        {/* Al hacer clic en el título, redirige al enlace */}
        <h5 className="card-title mt-3" onClick={handleRedirect} style={{ cursor: "pointer" }}>
          {props.title}
        </h5>
        <p className="card-text">{props.content}</p>
        <div className="row">
          <p className="col fw-light text-secondary">Fecha: {props.published_date}</p>
          <p className="col fw-light text-secondary">Autor: {props.author.name}</p>
          <p className="col fw-light text-secondary">Periódico: {props.newspaper.name}</p>
        </div>
      </div>
    </div>
  );
};
