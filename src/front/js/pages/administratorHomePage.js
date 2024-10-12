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
        <div className="container mt-5">
            <h1 className="text-danger">HOMEE privadoo admin</h1>
            <button className="btn btn-primary" onClick={actions.getArticleApiData}>traer datos de api</button>

            <div className="my-4">
                <button onClick={() => setShowFilters(!showFilters)} className="btn btn-info">
                    {showFilters ? "Ocultar Filtros" : "Mostrar Filtros"}
                </button>
            </div>

            {showFilters && (
                <div className="my-4">
                    <button onClick={() => setSelectedCategories([])} className="btn btn-secondary mx-2">Todas</button>
                    {store.categories.map((category, index) => (
                        <button
                            key={index}
                            onClick={() => handleCategoryChange(category.name)}
                            className={`btn mx-2 ${selectedCategories.includes(category.name) ? "btn-success" : "btn-primary"}`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
            )}

            <div className="row d-flex flex-nowrap my-5" style={{ overflowX: "scroll" }}>
                {filteredArticles.map((article, index) => (
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
                        isAdmin={true} // Indica que es la vista de administrador
                    />
                ))}
            </div>

            {/* Navegación a otras páginas */}
            <div className="ml-auto mb-2">
                <Link to="/author">
                    <button className="btn btn-primary">Ver autores</button>
                </Link>
            </div>
            <div className="ml-auto mb-2">
                <Link to="/newspaper">
                    <button className="btn btn-primary">Ir a Periódicos</button>
                </Link>
            </div>
            <div className="ml-auto mb-2">
                <Link to="/category">
                    <button className="btn btn-primary">Ver Categorías</button>
                </Link>
            </div>
            <div className="ml-auto mb-2">
                <Link to="/article">
                    <button className="btn btn-primary">Ir a Artículos</button>
                </Link>
            </div>
        </div>
    );
};
