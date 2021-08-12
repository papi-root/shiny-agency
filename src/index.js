import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home'; 
import Survey from './pages/Survey';
import Header from './components/Header';
import Error from './components/Error';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header /> 

      <Switch>  
        <Route exact path="/">
          <Home /> 
        </Route>

        <Route path="/survey/:questionNumber">
          <Survey /> 
        </Route>
        
        <Route>
            <Error /> 
        </Route>
      </Switch>
     
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

