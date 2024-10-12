import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { CardArticle } from "../component/cardArticle";

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
        <div className="text-center mt-5">
            <h1 className="text-danger">HOMEE</h1>
            <button className="btn btn-primary" onClick={() => { actions.getArticleApiData() }}>Traer datos de API</button>

            <div className="my-4">
                <button onClick={() => setShowFilters(!showFilters)} className="btn btn-info">
                    {showFilters ? "Ocultar Filtros" : "Mostrar Filtros"}
                </button>
            </div>

            {showFilters && (
                <div className="my-4">
                    <button onClick={() => setSelectedCategories([])} className="btn btn-secondary mx-2">
                        Todas
                    </button>
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
                        isAdmin={store.userRole === 'admin'} // Comprobar si el usuario es admin
                    />
                ))}
            </div>
        </div>
    );
};
