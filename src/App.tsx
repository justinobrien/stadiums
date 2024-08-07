import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  useLocation
} from 'react-router-dom';

import LandingPage from './pages/landingPage/LandingPage';
import BeerMenu from './pages/beerMenu/BeerMenu';
import HappyHourMenu from './pages/food/HappyHourMenu';
import DailySpecials from './pages/food/DailySpecials';
import OnlineOrdering from './pages/food/OnlineOrdering';
import DinnerMenu from './pages/food/DinnerMenu';
import BreakfastMenu from './pages/food/BreakfastMenu';
import Entertainment from './pages/entertainment/Entertainment';
import Information from './pages/information/Information';
import Calender from './pages/calender/Calender';
import NavButton from './components/NavButton/NavButton';
import BackdropComponent from './components/Backdrop/BackdropComponent';

import './App.scss';
import SideDrawerComponent from './components/SideDrawerComponent/SideDrawerComponent';
import AboutUs from './pages/about/AboutUs';

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
        <NavButton click={this.navButtonClickHander} />

        <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route path="/beermenu" exact>
            <BeerMenu />
          </Route>
          <Route path="/orderonline" exact>
            <OnlineOrdering />
          </Route>
          <Route path="/specialsmenu" exact>
            <DailySpecials />
          </Route>
          <Route path="/breakfastmenu" exact>
            <BreakfastMenu />
          </Route>
          <Route path="/dinnermenu" exact>
            <DinnerMenu />
          </Route>
          <Route path="/happyhourmenu" exact>
            <HappyHourMenu />
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
          <Route path="/about" exact>
            <AboutUs />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  };
};

export default App;
