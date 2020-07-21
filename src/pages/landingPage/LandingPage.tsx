import React from 'react';
import HeroComponent from '../../components/heroComponent/HeroComponent';
import BeerMenuComponent from '../../components/beerMenuComponent/BeerMenuComponent';
import SpecialEventsComponent from '../../components/specialEventsComponent/SpecialEventsComponent';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page-div">
      <HeroComponent />
      <div className="row">
        <BeerMenuComponent />
        <SpecialEventsComponent />
      </div>
      <div className="row">
        <SpecialEventsComponent />
        <BeerMenuComponent />
      </div>
    </div>
  );
  
};

export default LandingPage;