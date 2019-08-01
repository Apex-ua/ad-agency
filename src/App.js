import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactsPage from './pages/ContactsPage';
import ClientsPage from './pages/ClientsPage';
import NotFoundPage from './pages/NotFoundPage';
import ServicesPage from './pages/ServicesPage';

import NavBar from './components/NavBar';
import FooterBar from './components/FooterBar';

import './App.css';



function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/contacts" component={ContactsPage} />
            <Route path="/clients" component={ClientsPage} />
            <Route path="/services" component={ServicesPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
        <FooterBar />
      </div>
    </Router>
  );
}

export default App;
