import React from 'react';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menu from './components/pages/Menu';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import LogIn from './components/pages/LogIn';




function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/Deja-Brew/' exact component={Home} />
        <Route path='/Deja-Brew/menu' component={Menu} />
        <Route path='/Deja-Brew/about-us' component={AboutUs} />
        <Route path='/Deja-Brew//contact-us' component={ContactUs} />
        <Route path='/Deja-Brew/login' component={LogIn} />
      </Switch>
    </Router>
  );
}

export default App;
