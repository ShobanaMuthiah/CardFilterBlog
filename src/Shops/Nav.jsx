import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='navi'>      
        <Link to='/'>All</Link>
        <Link to='/fsd'>Full Stack Development</Link>
        <Link to='/cyber'>Cyber</Link>
        <Link to='/ds'>Data Structure</Link>
        <Link to='/career'>Career</Link>
        </nav>
    );
};

export default Nav;