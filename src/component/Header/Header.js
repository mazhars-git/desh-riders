import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import Home from '../Home/Home';
import './Header.css';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div className="header-area">
            <div className="main-menu container">
                <div className="row">
                    <div className="logo-area col-md-4">
                        <li>
                            <Link to="/home">
                                <h4 style={{fontSize: '30px', color: 'navy', fontWeight: 'bold'}}>
                                    DESH RIDERS
                                </h4>
                            </Link>
                        </li>
                    </div>
                    <div className="menu col-md-8">
                        <nav className="nav">
                            <ul>
                                <li>
                                    <Link to="/home">Home</Link>
                                </li>
                                <li>
                                    <Link to="/home">Destination</Link>
                                </li>
                                <li>
                                    <Link to="/blog">Blog</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                                <li>
                                    <Link to="/login">{isLoggedIn ? 'Login' : ''}</Link>
                                </li>
                                <li>
                                    <Link onClick={() => setLoggedInUser({})} to="/login">{isLoggedIn ? '' : 'Sign Out'}</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;