import React from 'react';
import './AboutUs.scss';
import ContactForm from './contactForm.jsx';

const AboutUs = () => {
    return (<div>
        {/* Location | Hours | Contact Form | Google map | Phone Number | email | About */}
        <div> Welcome to Stadiums, Milwalkie's premier sports bar where we provide a white color experience at blue color prices, we do this by making our food in house using high quality local ingredients and by hiring experienced, friendly wait staff.</div>
        <div> We are located at 16065 SE McLoughlin Blvd milwaukie, OR 97267</div>
        <div className="googleMapGoesHere"></div>
        <div className="contactInfo">
            <span>info@stadiumssportsgrill.com</span>
            <span>503-305-8410</span>
        </div>
        <ContactForm />
    </div>);
};

export default AboutUs;