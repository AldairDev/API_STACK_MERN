import React from 'react';
import './nav.css';
function Nav() {
    return(
        <div className="container">
            <nav className="nav-content">
                    <h1 className="title">
                        API PRODUCT
                    </h1> 
                    <div className="nav-log">
                        <div className="signin">
                            <p>Sign in</p>
                            <img src="./images/key.svg" alt="in"/>
                        </div>
                        <hr className="line" />
                        <div className="signup">
                            <p>Sign up</p>
                            <img src="./images/plus.svg" alt="up"/>
                        </div>
                    </div>
            </nav>
        </div>
    );
}

export default Nav;