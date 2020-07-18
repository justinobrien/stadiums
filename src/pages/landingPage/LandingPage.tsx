import React from 'react';
import HeroComponent from '../../components/heroComponent/HeroComponent.js';
import BeerMenuComponent from '../../components/beerMenuComponent/BeerMenuComponent';
import SpecialEventsComponent from '../../components/specialEventsComponent/SpecialEventsComponent';
import SimpleBarReact from 'simplebar-react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <SimpleBarReact>
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
    </SimpleBarReact>
  );
  
};

export default LandingPage;