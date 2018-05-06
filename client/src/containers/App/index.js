import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Home from '../Home';
import About from '../About';
import Header from '../../components/Header';

const App = () =>
  <div>
    <Router>
      <div>
        <Header />
        <Route exact path='/' component={ Home } />
        <Route path='/about' component={ About } />
      </div>
    </Router>
  </div>;


export default App;
