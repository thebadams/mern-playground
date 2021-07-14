import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useContext} from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import axios from 'axios';
import RegistrationForm from './components/RegistrationForm';
import SPOTIFY from './components/spotifysear';
import Button from './components/button';
import Auth from './utils/authContext';
import PrivateRoute from './components/PrivateRoute';
import Home from './components/Home';
import Protected from './components/Protected';
function App() {
  return (
    <div>
      <Auth>
        <BrowserRouter>
          <Switch>
        <Route exact path='/' component={Home} />
        <PrivateRoute path='/protected' component={Protected} />
      </Switch>
        </BrowserRouter>
        
      </Auth>
      
    </div>
  )

}

export default App;
