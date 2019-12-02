import React, { useState, useEffect } from 'react'
import axios from 'axios';
export default function Categories() {

    const [categoryProduct, setCategoryProduct] = useState([])

    
    useEffect(() => {
        const getCategoryProduct = async() =>{
            const id = 'electrodomesticos'
            const res = await axios.get('http://localhost:3001/'+ id);
            setCategoryProduct(res.data);
            console.log(res)
        }
        getCategoryProduct();
    }, [])

    return (
        <div className="products-container">
            <div className="products-content">
                <div className="products-title">
                    <hr />
                    <h1>Phone</h1>
                    <hr />
                </div>

                <div className="list-product">
                    {categoryProduct.map(pro =>
                        <div key={pro._id} className="product-details">
                            <img src="./images/tv-samsung.jpg" width="250" heigth="350" alt="tv-samsung" />
                            <div className="product-details-span">
                                <strong className="product-name">samsung</strong>
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
