import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { CardArticle } from "../component/cardArticle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Asegúrate de instalar la biblioteca de iconos FontAwesome
import { faFilter, faStar } from '@fortawesome/free-solid-svg-icons'; // Importa los iconos que desees

export const HomePage = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [userPreferredCategories, setUserPreferredCategories] = useState([]);
    const [showFilters, setShowFilters] = useState(false);
    const [showPreferences, setShowPreferences] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
        } else {
            actions.getHomepage();
            actions.getDataArticle();
            actions.loadCategories();
            actions.getUserPreferredCategories();
        }
    }, [actions, navigate]);

    useEffect(() => {
        if (store.userPreferredCategories.length > 0) {
            const preferredCategories = store.userPreferredCategories.map(cat => cat.category_id);
            setUserPreferredCategories(preferredCategories);
            setSelectedCategories(preferredCategories);
        }
    }, [store.userPreferredCategories]);

    const handleCategoryChange = (category) => {
        setSelectedCategories(prevSelectedCategories => {
            if (prevSelectedCategories.includes(category)) {
                return prevSelectedCategories.filter(cat => cat !== category);
            } else {
                return [...prevSelectedCategories, category];
            }
        });
    };

    const savePreferences = async () => {
        await actions.saveUserPreferredCategories(selectedCategories);
        setShowPreferences(false); // Cerrar el modal después de guardar
    };

    const filteredArticles = selectedCategories.length > 0
        ? store.Articles.filter((article) => selectedCategories.includes(article.category.id))
        : store.Articles;

    return (
        <div className="container-fluid mt-5 bg-black">
            <h1 className="text-light text-center">Noticias Personalizadas</h1>

            <div className="my-4 text-center">
                <button onClick={() => setShowFilters(!showFilters)} className="btn btn-outline-light mx-2">
                    <FontAwesomeIcon icon={faFilter} /> {showFilters ? "Ocultar Filtros" : "Filtros"}
                </button>

                <button onClick={() => setShowPreferences(!showPreferences)} className="btn btn-outline-warning mx-2">
                    <FontAwesomeIcon icon={faStar} /> {showPreferences ? "Ocultar Preferencias" : "Preferencias"}
                </button>
            </div>

            {showFilters && (
                <div className="my-4 text-center">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button onClick={() => setSelectedCategories([])} className="btn btn-outline-secondary mx-2">
                            Todas
                        </button>
                        {store.categories.map((category, index) => (
                            <button
                                key={index}
                                onClick={() => handleCategoryChange(category.id)}
                                className={`btn mx-2 ${selectedCategories.includes(category.id) ? "btn-primary" : "btn-outline-secondary"}`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {showPreferences && (
                <div className="p-4 text-start bg-dark text-light rounded shadow">
                    <h3>Selecciona tus categorías preferidas</h3>
                    {store.categories.map((category, index) => (
                        <div key={index} className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id={`category-${category.id}`}
                                checked={selectedCategories.includes(category.id)}
                                onChange={() => handleCategoryChange(category.id)}
                            />
                            <label className="form-check-label" htmlFor={`category-${category.id}`}>
                                {category.name}
                            </label>
                        </div>
                    ))}
                    <button className="btn btn-primary mt-3" onClick={savePreferences}>
                        Guardar Preferencias
                    </button>
                </div>
            )}

            <div className="row justify-content-center my-5">
                {filteredArticles.length > 0 ? (
                    filteredArticles.map((article, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <CardArticle
                                title={article.title}
                                content={article.content}
                                image={article.image}
                                published_date={article.published_date}
                                source={article.source}
                                link={article.link}
                                author={article.author}
                                newspaper={article.newspaper}
                                category={article.category}
                                id={article.id}
                                isAdmin={false}
                            />
                        </div>
                    ))
                ) : (
                    <p className="text-light">No se encontraron artículos para las categorías seleccionadas.</p>
                )}
            </div>
        </div>
    );
};
