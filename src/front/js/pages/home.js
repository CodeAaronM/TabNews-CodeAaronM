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
        <div className="container-fluid text-center pt-5 bg-black">
            <div className="py-4">
                <h1 className="text-primary">Bienvenido a TapNews</h1>
                <p className="text-secondary">Explora las últimas noticias a tu manera.</p>
                <div className="pt-4 text-start">
                    <button onClick={() => setShowFilters(!showFilters)} className="btn btn-info">
                        {showFilters ? "Ocultar Filtros" : "Filtros"}
                    </button>
                </div>
            </div>

            {showFilters && (
                <div className="py-4">
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

            <div className="row justify-content-evenly py-5">
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
                        isAdmin={store.userRole === 'admin'}
                    />
                ))}
            </div>
        </div>
    );
};
