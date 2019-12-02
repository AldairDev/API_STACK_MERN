import React from 'react';
import {Link} from 'react-router-dom';
import './nav.css';
function Nav() {
    return (
        <div className="nav-container">
            <nav className="nav-content">
                    <Link className="title" to="/">
                    API PRODUCT
                    </Link >
                <div className="nav-log">
                    <div className="signin">
                        <p>Sign in</p>
                        <img src="./images/key.svg" alt="in" />
                    </div>
                    <hr className="line" />
                    <div className="signup">
                        <p>Sign up</p>
                        <img src="./images/plus.svg" alt="up" />
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;