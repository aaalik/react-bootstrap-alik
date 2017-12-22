import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../views/App';

/**
* @param exact in order for not being followed with bellow routes
*/

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={App} />
    </div>
  </Router>
);

export default Routes;