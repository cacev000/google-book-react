import React from 'react';
import "./nav.css"


const Nav = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#no">Google-Books-React-HW</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="#nowhre">Saved</a>
                    {/* <a className="nav-item nav-link" href="#">Features</a> */}
                </div>
            </div>
        </nav>
    );
};

export default Nav;