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

  return (
    <div className="card m-2" style={{ width: "18rem" }}>
      <img src={props.image || rigoImage} className="card-img-top" alt={props.title} />
      <div className="card-body">
        {props.isAdmin && (
          <>
            <Link to="/AddArticle">
              <button type="button" className="btn btn-outline-light text-secondary" onClick={handleEdit}>
                <i className="fa-solid fa-pencil"></i>
              </button>
            </Link>
            <button type="button" className="btn btn-primary" onClick={() => actions.deleteArticle(props.id)}>
              DELETE
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
          </>
        )}
        <h5 className="card-title">title: {props.title}</h5>
        <p className="card-text m-0">content: {props.content}</p>
        <p className="card-text m-0">published_date: {props.published_date}</p>
        <p className="card-text m-0">source: {props.source}</p>
        <p className="card-text m-0">link: {props.link}</p>
        <p className="card-text m-0">author: {props.author.name}</p>
        <p className="card-text m-0">newspaper: {props.newspaper.name}</p>
        <p className="card-text m-0">category: {selectedCategory.name}</p>
        <p className="card-text m-0">id: {props.id}</p>
      </div>
    </div>
  );
};
