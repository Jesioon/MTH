import React, {Component} from 'react';
import '../styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './Navigation';
import Content from './Content';
import Footer from './Footer';

class App extends Component {
  render() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <Content/>
        <Footer/>
      </Router>
    </div>
  );
  }
}

export default App;
