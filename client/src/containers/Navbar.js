import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const NavBar = () => {
    return(
        <div>
            <div >
                <nav className='Nav-bar'>
                    <NavLink className='Nav-link' to='/'>Home</NavLink>
                </nav>
            </div>
        </div>
    )
}

export default NavBar;