import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
function Nav() {
    return (
        <div className="nav-container">
            <nav className="nav-content">
                <Link className="title" to="/">
                    API PRODUCT
                    </Link >
                <div className="nav-log">
                    <Link className="signin" to="/signin">
                        <p>Sign in</p>
                        <img src="./images/key.svg" alt="in" />
                    </Link>
                    <hr className="line" />
                    <Link className="signup" to="/signup">
                        <p>Sign up</p>
                        <img src="./images/plus.svg" alt="up" />
                    </Link>
                </div>
            </nav>
        </div>
    );
}

export default Nav;