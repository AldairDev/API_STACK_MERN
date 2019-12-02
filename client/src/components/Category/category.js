import React, {useState, useEffect} from 'react';
import './category.css';

export default function Category() {
    
    const clickme = () =>{

        console.log('gaaaaa')
    }
    return (
        <div className="category-container">
            <aside className="category-content">
                <div className="c-title">
                    <span>Productos</span>
                </div>
                <div onClick={clickme} className="c-videoGames">
                    <span>Consola y videojuegos</span>
                    <img src="./images/game-control-tool.svg" alt="videogame" />
                </div>
                <div className="c-videoGames">
                    <span>Electrodomésticos</span>
                    <img src="./images/laptop.svg" alt="videogame" />
                </div>
                <div className="c-videoGames">
                    <span>Ropa y accesorios</span>
                    <img src="./images/shirt.svg" alt="videogame" />
                </div>
                <div className="c-videoGames">
                    <span>Deporte</span>
                    <img src="./images/soccer-ball-variant.svg" alt="videogame" />
                </div>
                <div className="c-videoGames">
                    <span> Phone </span>
                    <img src="./images/smartphone-call.svg" alt="videogame" />
                </div>
            </aside>
        </div>
    )
}
