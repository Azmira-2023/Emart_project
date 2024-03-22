import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold fs-1 text-capitalize text-dark" to="/">
                        Mira's Collection
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active fs-4" aria-current="page" to="/">
                                    Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link class="nav-link active fs-4" to="/products">
                                    Products
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active fs-4" to="/about">
                                    About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active fs-4" to="/contact">
                                    Contact</Link>
                            </li>

                        </ul>
                        <div className="buttons">
                            <Link to="/login" className="btn btn-outline-dark fs-4">
                                <i className='fa fa-sign-in me-1 '></i>Login
                            </Link>
                            <Link to="/register" className="btn btn-outline-dark ms-2 fs-4">
                                <i className='fa fa-user-plus me-1 '></i>Register
                            </Link>
                            <Link to="/cart" className="btn btn-outline-dark ms-2 fs-4">
                                <i className='fa fa-shopping-cart me-1 '></i>Cart(0)
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;