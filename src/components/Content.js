import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import '../styles/Content.css'

import OnSale from '../contents/OnSale';
import Inwestments from '../contents/Inwestments';
import Realizations from '../contents/Realizations';
import BuyGrounds from '../contents/BuyGrounds';
import AboutUs from '../contents/AboutUs';
import ErrorPage from '../contents/ErrorPage';
import Contact from '../contents/Contact';

class Content extends React.Component{
    state = {
        displayContactButton: false,
    }

    componentDidMount() {
        setTimeout(()=> {
            this.setState({
                displayContactButton: true
            })
        }, 2000)
    }
    render() {
    return ( 
        <main>
            {this.state.displayContactButton && <button id='contactButton'><Link to='/contact'>Skontaktuj się z nami</Link></button>}
            <Switch>
            <Route path='/' exact component={OnSale}/>
            <Route path='/inwestments'  component={Inwestments}/>
            <Route path='/realizations'  component={Realizations}/>
            <Route path='/buyGrounds'  component={BuyGrounds}/>
            <Route path='/aboutUs'  component={AboutUs}/>
            <Route path='/contact'  component={Contact}/>
            <Route component={ErrorPage}/>
            </Switch>
        </main>
     );
    }
}
 
export default Content;