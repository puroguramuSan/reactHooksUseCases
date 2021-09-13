import React from 'react';

import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">useContext</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink exact to="/" activeClassName="active" className="nav-link" aria-current="page">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/login" activeClassName="active" className="nav-link" aria-current="page">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/about" activeClassName="active" className="nav-link" aria-current="page">About</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
