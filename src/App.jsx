import React from 'react';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menu from './components/pages/Menu';
import Products from './components/pages/Products';
import ContactUs from './components/pages/ContactUs';
import LogIn from './components/pages/LogIn';




function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/Deja-Brew/' exact component={Home} />
        <Route path='/menu' component={Menu} />
        <Route path='/products' component={Products} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/login' component={LogIn} />
      </Switch>
    </Router>
  );
}

export default App;
