import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { setToken, getToken } from '../../helpers/helpers'
import Error from '../Error/error';
import User from './user'

export default function Signin() {

    const [error, setError] = useState(null);

    const [emailYPassword, setEmailYPassword] = useState({
        email: '',
        password: ''
    });

    const [redirect, setRedirect] = useState(false);


    function handleInputChange(e) {
        setEmailYPassword({
            ...emailYPassword,
            [e.target.name]: e.target.value
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const { data } = await axios.post('http://localhost:3001/signin', emailYPassword);
            console.log('this is the token');
            console.log(data)
            console.log(data.token);
            setToken(data.token);
            setRedirect(true);

        } catch (error) {

            console.log(error);
        }
    }


    function showError(mensaje) {
        setError(mensaje);
    }

    const hiddenError = () => {
        setError(null)
    }

    if(redirect){
        return(
            <div>
                <User />
            </div>
        )
    }

    return (
        
        <div>
            {/* <Error mensaje = {showError} esconderError = {hiddenError} /> */}
            <h1>signIn</h1>
            <form onSubmit={handleSubmit} >
                <input type="email" name="email" placeholder="email" onChange={handleInputChange} />
                <br />
                <br />
                <input type="password" name="password" placeholder="password" onChange={handleInputChange} />
                <br />
                <br />
                <button type="submit"> signin </button>
            </form>
        </div>
    )
}
