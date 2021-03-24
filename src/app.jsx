import React from 'react';
import {
  Route, BrowserRouter as Router, Switch,
} from 'react-router-dom';

import Header from './app/core/header/header';
import Sidenav from './app/core/sidenav/sidenav';
import predictiveMintenance from './app/predictiveMaintenance/predictiveMaintenance';
import './app.scss';

const App = () => {

  return (
    <div>
      <div>
        <Router>
          <Header />
          <div className="m-0 page-actions-header">
            <div className="side-nav-bar p-0">
              <Sidenav />
            </div>
            <div className="main-content">
              <Switch>
                <Route exact path="/" component={predictiveMintenance} />

              </Switch>
            </div>
          </div>
        </Router>
      </div>
    </div>
  );
};

export default App;
