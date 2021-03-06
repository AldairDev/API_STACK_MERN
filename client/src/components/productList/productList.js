import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './productList.css'

export default function ProductList() {

    const [product, setproduct] = useState([]);

    useEffect(() => {
        const getProduct = async () => {
            const res = await axios.get('http://localhost:3001/');
            setproduct(res.data);
            // console.log(data);
            // console.log(product);
        }

        getProduct();
    }, [])

    return (
        <div className="products-container">
            <div className="products-content">
                <div className="products-title">
                    <hr />
                    <h1>Ofertas</h1>
                    <hr />
                </div>

                <div className="list-product">
                    {/* {product.map(pro => console.log(pro.name))} */}
                    {product.map(pro =>
                        <div key={pro._id} className="product-details">
                            <img src={pro.imageURL} width="250" heigth="350" alt="tv-samsung" />
                            <div className="product-details-span">
                                <strong className="product-name">{pro.name}</strong>
                                <p className="product-description"> {pro.description} </p>
                                <div className="price-more">
                                    <strong className="product-price">S/.{pro.price} </strong>
                                    <button> Ver más </button>
                                </div>
                            </div>
                        </div>

                    )}

                </div>
            </div>
        </div>
    )
}
