import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../views/App';
import Profile from '../views/Profile';

/**
* @param exact in order for not being followed with bellow routes
*/

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/profile" component={Profile} />
    </div>
  </Router>
);

export default Routes;