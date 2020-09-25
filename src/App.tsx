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
import NavButton from './components/NavButton/NavButton';
import BackdropComponent from './components/Backdrop/BackdropComponent';

import './App.css';
import { textChangeRangeIsUnchanged } from 'typescript';
import SideDrawerComponent from './components/SideDrawerComponent/SideDrawerComponent';

class App extends React.Component {
  state = {
    sideDrawerOpen: false,
    backdropVisible: false,
  };
  
  backdropClickHandler = () => {
    this.setState({
      sideDrawerOpen: false,
      backdropVisible: false,
    });
  };
  navButtonClickHander = () => {
    this.setState({
      sideDrawerOpen: true,
      backdropVisible: true,
    });
  };
  navigationHandler = () => {
    this.setState({
      sideDrawerOpen: false,
      backdropVisible: false,
    });
  };

  render() {
    let backdrop = null;
    if (this.state.backdropVisible) {
      backdrop = <BackdropComponent click={this.backdropClickHandler}/>;
    }
    
    return (
      <Router>
        <SideDrawerComponent show={this.state.sideDrawerOpen} linkClicked={this.navigationHandler} />
        {backdrop}
        <NavButton click={this.navButtonClickHander}/>

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
};

export default App;
