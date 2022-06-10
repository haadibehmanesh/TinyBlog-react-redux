import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <>
            <div className="navbar yellotail">
                <Link style={{ textDecoration: 'none' }} to="/">
                    <Navbar.Brand>The daily news</Navbar.Brand>
                </Link>

            </div>
            <div className='nav'>
                <div className='nav-item'>
                    <Link to="/">Home</Link> | {" "}
                </div>
                <div className='nav-item'>
                    <Link to="/contact">Contact</Link> | {" "}
                </div>
                <div className='nav-item'>
                    <Link to="user">Users</Link>
                </div>
            </div>


        </>
    )
}

export default Header;