import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import LandingPage from './pages/landingPage/LandingPage';
import BeerMenu from './pages/beerMenu/BeerMenu';
import FoodMenu from './pages/foodMenu/FoodMenu';
import Entertainment from './pages/entertainment/Entertainment';
import Information from './pages/information/Information';
import Calender from './pages/calender/Calender';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/beermenu" exact>
          <BeerMenu />
        </Route>
        <Route path="/calender" exact>
          <Calender />
        </Route>
        <Route path="/entertainment" exact>
          <Entertainment />
        </Route>
        <Route path="/information" exact>
          <Information />
        </Route>
        <Route path="/menu" exact>
          <FoodMenu />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
