import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <>
            <div className="navbar yellotail">
                <Link to="/">
                    <Navbar.Brand>The daily news</Navbar.Brand>
                </Link>

            </div>
            <div className='nav'>
                <div className='nav-item'>
                    <Link to="/home">Home</Link>
                </div>
                <div className='nav-item'>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>


        </>
    )
}

export default Header;