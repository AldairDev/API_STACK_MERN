import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './category.css';

export default function CategoryList() {

    return (
        <div className="category-container">
            <aside className="category-content">
                <div className="c-title">
                    <span>Productos</span>
                </div>
                <Link className="c-videoGames" to="/videogames">
                    <span>Consola y videojuegos</span>
                    <img src="./images/game-control-tool.svg" alt="videogame" />
                </Link>
                <Link className="c-videoGames" to="/Electrodomesticos">
                    <span>Electrodomésticos</span>
                    <img src="./images/laptop.svg" alt="videogame" />
                </Link>
                <Link className="c-videoGames" to="/Ropa&accesorio">
                    <span>Ropa y accesorios</span>
                    <img src="./images/shirt.svg" alt="videogame" />
                </Link>
                <Link className="c-videoGames" to="/Deporte">
                    <span>Deporte</span>
                    <img src="./images/soccer-ball-variant.svg" alt="videogame" />
                </Link>
                <Link className="c-videoGames" to="/Phone">
                    <span> Phone </span>
                    <img src="./images/smartphone-call.svg" alt="videogame" />
                </Link>
            </aside>
        </div>
    )
}
