import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { CardArticle } from "../component/cardArticle";
import { Link } from "react-router-dom";

export const Article = () => {
	const { store, actions } = useContext(Context);
	
	useEffect(() => {
		actions.getDataArticle();
	}, [actions]);
	
	return (
		<div className="container-fluid mt-5 bg-black text-white p-4">
			<h1 className="text-danger text-center">Artículos</h1>
			
			<div className="text-center mb-4">
				<Link to="/administratorHomePage" className="btn btn-outline-light mx-2">
					Volver a Inicio
				</Link>
				<Link to="/AddArticle" className="btn btn-primary mx-2">
					Crear Artículo
				</Link>
			</div>

			<div className="row justify-content-center my-5">
				{store.Articles.length > 0 ? (
					store.Articles.map((article, index) => (
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
							/>
						</div>
					))
				) : (
					<p>No se encontraron artículos.</p>
				)}
			</div>

			<div className="alert alert-info">
				{store.message || "Cargando mensaje desde el backend (asegúrate de que tu backend de Python esté corriendo)..." }
			</div>

			<p className="text-center">
				Este boilerplate viene con mucha documentación:{" "}
				<a href="https://start.4geeksacademy.com/starters/react-flask" className="text-light">
					Leer documentación
				</a>
			</p>
		</div>
	);
};
