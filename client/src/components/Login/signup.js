import React, {useState} from 'react'
import axios from 'axios'


export default function Signup() {

    const [user, setUser] = useState({
        username:'',
        email: '',
        password: ''
    
    });
    
    function handleInputChange(e) {
        e.persist();
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }
    
    async function handleSubmit(e) {
    
        e.preventDefault()
        try {
            const { data } = await axios.post('http://localhost:3001/signup', user)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1>SignUP</h1>
            <br />
            <br/>
            <form onSubmit={handleSubmit}>
                <input onChange={handleInputChange} type="text" name="username" placeholder="username"/>
                <input onChange={handleInputChange} type="email" name="email" placeholder="email" />
                <input onChange={handleInputChange} type="password" name="password" placeholder="password" />
                <button type="submit" > signup </button>
            </form>
        </div>
    )
}
