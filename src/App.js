import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

import './App.css';
import AppNavbar from './components/layout/AppNavbar';
import Dashboard from './components/layout/Dashboard';
import Login from './components/auth/Login';
import AddClient from './components/clients/AddClient';
import EditClient from './components/clients/EditClient';
import ClientDetails from './components/clients/ClientDetails';

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Router>
          <div className="App">
            <AppNavbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={ Dashboard } />
                <Route exact path="/clients/new" component={ AddClient } />
                <Route exact path="/clients/:id/edit" component={ EditClient } />
                <Route exact path="/clients/:id" component={ ClientDetails } />
                <Route exact path="/login" component={ Login } />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
