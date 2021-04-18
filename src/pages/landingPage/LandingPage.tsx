import React from 'react';
import HeroComponent from '../../components/heroComponent/HeroComponent';
import BeerMenuComponent from '../../components/beerMenuComponent/BeerMenuComponent';
import SpecialEventsComponent from '../../components/specialEventsComponent/SpecialEventsComponent';
import { Link } from "react-scroll";
import EntertainmentComponent from '../../components/entertainmentComponent/EntertainmentComponent';
import FoodMenuComponent from '../../components/foodMenuComponent/FoodMenuComponent';

import './LandingPage.css';
import CalenderComponent from '../../components/calenderComponent/CalenderComponent';

const LandingPage = () => {
  return (
    <div className="landing-page-div">
      <Link activeClass="active" to="section1" spy={true} smooth={true} className="link-container" duration={700}>
        <span className="link-button"></span>
      </Link>
      <HeroComponent />
      <div className="landing-layout section section1">
        <BeerMenuComponent />
        <SpecialEventsComponent />
      </div>
      <div className="landing-layout section">
        <EntertainmentComponent />
        <FoodMenuComponent />
      </div>
      <div>
        <CalenderComponent />
      </div>
    </div>
  );
  
};

export default LandingPage;