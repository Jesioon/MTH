import React from 'react';
import '../styles/Navigation.css';
import {Link, NavLink} from 'react-router-dom';
import logo from '../images/logo.png';
import { FaBars } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

class Navigation extends React.Component {

    state = {
        showLeftMenu: false
    }

    handleMenuClick() {
        this.setState({
            showLeftMenu: !this.state.showLeftMenu
        })

    }

    render() {
        return ( 
            <>
            <nav className='mainNav'>
            <Link to='/'><img src={logo} alt='logo'/></Link>
            <ul>
                <li><NavLink to='/' exact>w sprzedaży</NavLink></li>
                <li><NavLink to='/inwestments'>inwestycje zrealizowane</NavLink></li>
                <li><NavLink to='/buyGrounds'>kupimy grunty</NavLink></li>
                <li><NavLink to='/aboutUs'>o nas</NavLink></li>
            </ul>
            {!this.state.showLeftMenu && <span id='burger'><FaBars id='burgerIcon' onClick={this.handleMenuClick.bind(this)}/></span>}
            {this.state.showLeftMenu && <span id='burger'><FaChevronUp id='burgerIcon' onClick={this.handleMenuClick.bind(this)}/></span>}

            </nav>
            {this.state.showLeftMenu && 
                        <nav className='leftNav'>
                        <ul>
                            <li onClick={this.handleMenuClick.bind(this)}><NavLink to='/' exact>w sprzedaży</NavLink></li>
                            <li onClick={this.handleMenuClick.bind(this)}><NavLink to='/inwestments'>inwestycje zrealizowane</NavLink></li>
                            <li onClick={this.handleMenuClick.bind(this)}><NavLink to='/buyGrounds'>kupimy grunty</NavLink></li>
                            <li onClick={this.handleMenuClick.bind(this)}><NavLink to='/aboutUs'>o nas</NavLink></li>
                        </ul>
                    </nav>
            }


            </>
        );
    }

}
 
export default Navigation;