import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext"; // Ajusta la ruta según sea necesario
import { useNavigate } from "react-router-dom";
import { CardArticle } from "../component/cardArticle";
import { Link } from "react-router-dom";

export const AdministratorHomePage = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [showFilters, setShowFilters] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/administratorLogin");
        } else {
            actions.getDataArticle();
            actions.loadCategories();
        }
    }, [actions, navigate]);

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
        <div className="container-fluid mt-5 bg-black text-white p-4">
            <h1 className="text-danger text-center">Administra tus noticias</h1>
            <button className="btn btn-primary mb-4" onClick={actions.getArticleApiData}>Traer datos de API</button>

            <div className="my-4 text-center">
                <button onClick={() => setShowFilters(!showFilters)} className="btn btn-primary">
                    {showFilters ? "Ocultar Filtros" : "Mostrar Filtros"}
                </button>
            </div>

            {showFilters && (
                <div className="my-4 text-center">
                    <button onClick={() => setSelectedCategories([])} className="btn btn-primary mx-2">Todas</button>
                    {store.categories.map((category, index) => (
                        <button
                            key={index}
                            onClick={() => handleCategoryChange(category.name)}
                            className={`btn mx-2 ${selectedCategories.includes(category.name) ? "btn-primary" : "btn-primary"}`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
            )}
            <div className="text-center my-4">
                <Link to="/author" className="btn btn-primary mx-2">Ver autores</Link>
                <Link to="/newspaper" className="btn btn-primary mx-2">Ir a Periódicos</Link>
                <Link to="/category" className="btn btn-primary mx-2">Ver Categorías</Link>
                <Link to="/article" className="btn btn-primary mx-2">Ir a Artículos</Link>
            </div>

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
                                isAdmin={true} // Indica que es la vista de administrador
                            />
                        </div>
                    ))
                ) : (
                    <p>No se encontraron artículos para las categorías seleccionadas.</p>
                )}
            </div>

            {/* Navegación a otras páginas */}
        </div>
    );
};
