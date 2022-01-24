import React from 'react';
import '../styles/Navigation.css';
import {Link, NavLink} from 'react-router-dom';
import logo from '../images/logo2.png';
import { FaBars } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

class Navigation extends React.Component {

    state = {
        showLeftMenu: false,
        windowWidth: "",
        windowHeight: ""
    }

    handleMenuClick() {
        const windowHeight = window.scrollY;

        this.setState({
            showLeftMenu: !this.state.showLeftMenu,
            windowHeight
        })
        // Odwrócone bo state jeszcze nie jest ustalony
        document.body.style.overflow = !this.state.showLeftMenu ? 'hidden' : 'unset';
    }

    handleResize = e => {
        const windowWidth = window.innerWidth;
        if(windowWidth > 980 && this.state.showLeftMenu) {
        this.setState(prevState => {
          return {
            windowWidth,
            showLeftMenu: false
          };
        });
        document.body.style.overflow = 'unset';

        }
        this.setState(prevState => {
          return {
            windowWidth,
          };
        });
      };
    
    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
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
            {this.state.showLeftMenu && <span id='burger'><FaChevronDown id='burgerIcon' onClick={this.handleMenuClick.bind(this)}/></span>}

            </nav>
            
            <nav className="leftNav" style={{height: this.state.showLeftMenu ? `calc(100vh - 85px + ${this.state.windowHeight}px)` : '0'}}>
                <ul>
                    <li onClick={this.handleMenuClick.bind(this)}><NavLink to='/' exact>w sprzedaży</NavLink></li>
                    <li onClick={this.handleMenuClick.bind(this)}><NavLink to='/inwestments'>inwestycje zrealizowane</NavLink></li>
                    <li onClick={this.handleMenuClick.bind(this)}><NavLink to='/buyGrounds'>kupimy grunty</NavLink></li>
                    <li onClick={this.handleMenuClick.bind(this)}><NavLink to='/aboutUs'>o nas</NavLink></li>
                </ul>
            </nav>
            </>
        );
    }

}
 
export default Navigation;