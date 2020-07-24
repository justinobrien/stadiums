import React from 'react';
import HeroComponent from '../../components/heroComponent/HeroComponent';
import BeerMenuComponent from '../../components/beerMenuComponent/BeerMenuComponent';
import SpecialEventsComponent from '../../components/specialEventsComponent/SpecialEventsComponent';
import './LandingPage.css';
import ScrollButtonComponent from '../../components/scrollButtonComponent/ScrollButtonComponent';
import { Link, animateScroll as scroll } from "react-scroll";

const LandingPage = () => {
  return (
    <div className="landing-page-div">
      <Link
          activeClass="active"
          to="section1"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="link-container"
      > <span className="link-button"></span> </Link>
      <HeroComponent />
      <div className="row section1">
        <BeerMenuComponent />
        <SpecialEventsComponent />
      </div>
      <div className="row section">
        <SpecialEventsComponent />
        <BeerMenuComponent />
      </div>
    </div>
  );
  
};

export default LandingPage;