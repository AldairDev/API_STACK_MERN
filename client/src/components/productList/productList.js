import React from 'react'
import './productList.css'
export default function productList() {

    return (
        <div className="products-container">
            <div className="products-content">
                <div className="products-title">
                    <hr />
                    <h1>Ofertas</h1>
                    <hr />
                </div>
                <div className="list-product">

                    <div className="product-details">
                        <img src="./images/tv-samsung.jpg" width="250" heigth="350" alt="tv-samsung" />
                        <div className="product-details-span">
                            <strong className="product-name">X85G | LED | 4K Ultra HD | Smart TV (Android TV™) </strong>
                            <p className="product-description"> Televisor 50’ samsung 4k, alta resolución nunca antes vista</p>
                            <div className="price-more">
                                <strong className="product-price">S/.59</strong>
                                <button> Ver más </button>
                            </div>
                        </div>
                    </div>
                    <div className="product-details">
                        <img src="./images/tv-samsung.jpg" width="250" heigth="350" alt="tv-samsung" />
                        <div className="product-details-span">
                            <strong className="product-name">X85G | LED | 4K Ultra HD | Smart TV (Android TV™) </strong>
                            <p className="product-description"> Televisor 50’ samsung 4k, alta resolución nunca antes vista</p>
                            <div className="price-more">
                                <strong className="product-price">S/.59</strong>
                                <button> Ver más </button>
                            </div>
                        </div>
                    </div>
                    <div className="product-details">
                        <img src="./images/tv-samsung.jpg" width="250" heigth="350" alt="tv-samsung" />
                        <div className="product-details-span">
                            <strong className="product-name">X85G | LED | 4K Ultra HD | Smart TV (Android TV™) </strong>
                            <p className="product-description"> Televisor 50’ samsung 4k, alta resolución nunca antes vista</p>
                            <div className="price-more">
                                <strong className="product-price">S/.59</strong>
                                <button> Ver más </button>
                            </div>
                        </div>
                    </div>
                    <div className="product-details">

                    </div>
                    <div className="product-details">

                    </div>
                    <div className="product-details">

                    </div>

                </div>
            </div>
        </div>
    )
}
