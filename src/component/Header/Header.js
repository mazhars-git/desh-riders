import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';
import './Header.css';

const Header = () => {
    return (
        <div className="header-area">
                <div className="main-menu container d-flex">
                    <div className="logo-area col-md-4">
                        <li>
                            <Link to="/home"><h4>DESH RIDERS</h4></Link>
                        </li>
                    </div>
                    <div className="menu col-md-8">
                        <nav className="nav">
                            <ul>
                                <li>
                                    <Link to="/home">Home</Link>
                                </li>
                                <li>
                                    <Link to="/destination">Destination</Link>
                                </li>
                                <li>
                                    <Link to="/blog">Blog</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                                {/* <li>
                                    <Link onClick={() => setLoggedInUser({})} to="/login">Sign Out</Link>
                                </li> */}
                            </ul>
                        </nav>
                    </div>
                </div>
        </div>
    );
};

export default Header;