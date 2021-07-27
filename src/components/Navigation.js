import React from 'react';
import '../styles/Navigation.css';
import {Link, NavLink} from 'react-router-dom';
import logo from '../images/logo.png';

const Navigation = () => {
    return ( 
    <nav className='mainNav'>
    <Link to='/'><img src={logo} alt='logo'/></Link>
    <ul>
        <li><NavLink to='/' exact>w sprzedaży</NavLink></li>
        <li><NavLink to='/inwestments'>inwestycje zrealizowane</NavLink></li>
        <li><NavLink to='/realizations'>w trakcie realizacji</NavLink></li>
        <li><NavLink to='/buyGrounds'>kupimy grunty</NavLink></li>
        <li><NavLink to='/aboutUs'>o nas</NavLink></li>
    </ul>
    </nav>
     );
}
 
export default Navigation;