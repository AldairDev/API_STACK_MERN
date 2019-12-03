import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default function Signin() {

    const [emailYPassword, setEmailYPassword] = useState({
        email: '',
        password: ''
    });

    function handleInputChange(e) {
        setEmailYPassword({
            ...emailYPassword,
            [e.target.name]: e.target.value
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const { data } = await axios.post('http://localhost:3001/signin', emailYPassword)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h1>signIn</h1>
            <form onSubmit={handleSubmit} >
                <input type="email" name="email" placeholder="email" onChange={handleInputChange}  />
                <br />
                <br />
                <input  type="password" name="password" placeholder="password" onChange={handleInputChange} />
                <button type="submit"> signin </button>
            </form>
        </div>
    )
}
