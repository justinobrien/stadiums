import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import NewPlace from './pages/places/NewPlace';
import LandingPage from './pages/landingPage/LandingPage';
import SimpleBarReact from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/places/new" exact>
          <NewPlace />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
