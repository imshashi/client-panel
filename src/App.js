import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { UserIsAuthenticated, UserIsNotAuthenticated } from './helpers/auth';

import { Provider } from 'react-redux';
import store from './store';

import './App.css';
import AppNavbar from './components/layout/AppNavbar';
import Dashboard from './components/layout/Dashboard';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Settings from './components/settings/Settings';
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
                <Route exact path="/" component={ UserIsAuthenticated(Dashboard) } />
                <Route exact path="/settings" component={ UserIsAuthenticated(Settings) } />
                <Route exact path="/clients/new" component={ UserIsAuthenticated(AddClient) } />
                <Route exact path="/clients/:id/edit" component={ UserIsAuthenticated(EditClient) } />
                <Route exact path="/clients/:id" component={ UserIsAuthenticated(ClientDetails) } />
                <Route exact path="/login" component={ UserIsNotAuthenticated(Login) } />
                <Route exact path="/register" component={ UserIsNotAuthenticated(Register) } />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
