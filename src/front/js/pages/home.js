import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { CardArticle } from "../component/cardArticle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importa FontAwesome
import { faFilter } from '@fortawesome/free-solid-svg-icons'; // Importa el icono de filtro

export const Home = () => {
    const { store, actions } = useContext(Context);
    const [selectedCategories, setSelectedCategories] = useState([]); 
    const [showFilters, setShowFilters] = useState(false);

    useEffect(() => {
        actions.getDataArticle();
        actions.loadCategories();
    }, []);

    const handleCategoryChange = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    const filteredArticles = selectedCategories.length > 0
        ? store.Articles.filter((article) => selectedCategories.includes(article.category.name))
        : store.Articles;

    return (
        <div className="container-fluid text-center pt-5 bg-black">
            <div className="py-4">
                <h1 className="text-light">Bienvenido a TapNews</h1>
                <p className="text-secondary">Explora las últimas noticias a tu manera.</p>
                <div className="pt-4">
                    <button onClick={() => setShowFilters(!showFilters)} className="btn btn-outline-light">
                        <FontAwesomeIcon icon={faFilter} /> {showFilters ? "Ocultar Filtros" : "Filtros"}
                    </button>
                </div>
            </div>

            {showFilters && (
                <div className="py-4">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button onClick={() => setSelectedCategories([])} className="btn btn-outline-secondary mx-2">
                            Todas
                        </button>
                        {store.categories.map((category, index) => (
                            <button
                                key={index}
                                onClick={() => handleCategoryChange(category.name)}
                                className={`btn mx-2 ${selectedCategories.includes(category.name) ? "btn-success" : "btn-outline-primary"}`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            <div className="row justify-content-evenly py-5">
                {filteredArticles.length > 0 ? (
                    filteredArticles.map((article, index) => (
                        <CardArticle
                            key={index}
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
                            isAdmin={store.userRole === 'admin'}
                        />
                    ))
                ) : (
                    <p className="text-white">No se encontraron artículos para las categorías seleccionadas.</p>
                )}
            </div>
        </div>
    );
};
