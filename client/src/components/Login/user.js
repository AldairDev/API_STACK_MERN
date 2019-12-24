import React, {useEffect, useState} from 'react'
import { getToken } from '../../helpers/helpers'
import axios from 'axios';

export default function User() {

const [verification, setVeriFication] = useState(false)
const [datos, setDatos] = useState(null)


    useEffect(() => {

        const setToken = async() =>{

            console.log(getToken())
            axios.defaults.headers.common['Authorization'] = getToken();
            const res = await axios.get('http://localhost:3001/user/cc');
            // {headers: 
            //     {
            //         'Content-Type' : 'application/json',
            //         'Authorization' : getToken()
            //     }
            // })
            setDatos(res.data)
            console.log(res)
        }
        setToken()

    }, [])


        console.log(datos)
        
        
    return (
        <div>
            <h1>this is the view protected</h1>
            {/* <div >
                    {datos.map(pro =>
                        <div key={pro._id} >
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
                </div> */}
        </div>
    )
}
