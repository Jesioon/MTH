import React, {Component} from 'react';
import '../styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './Navigation';
import Content from './Content';
import Footer from './Footer';

class App extends Component {
  render() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <div className="App"> 
        <Navigation/>
        <Content/>
        <Footer/>
    </div>
    </Router>
  );
  }
}

export default App;
