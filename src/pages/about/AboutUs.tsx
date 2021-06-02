import React from 'react';
import './AboutUs.scss';
import ContactForm from './contactForm.jsx';

const AboutUs = () => {
    return (<div className="about-us">
        {/* Location | Hours | Contact Form | Google map | Phone Number | email | About */}
        <div > Welcome to Stadiums, Milwalkie's premier sports bar where we provide a white color experience at blue color prices, we do this by making our food in house using high quality local ingredients and by hiring experienced, friendly wait staff.</div>
        <div> We are located at 16065 SE McLoughlin Blvd milwaukie, OR 97267</div>
        <div className="googleMapGoesHere"></div>
        <div className="contactInfo">
            <p>
                info@stadiumssportsgrill.com <br/>
                503-305-8410
            </p>
        </div>
        <h3> HOURS OF OPERATION </h3>
        <p>
            Saturday 10AM to 11PM <br/>
            Sunday 10AM to 10PM <br/>
            Monday and Tuesday noon to 10 PM <br/>
            Wednesday noon to 11PM <br/>
            Thursday and Friday 11AM to 11PM
        </p>
        <ContactForm />
    </div>);
};

export default AboutUs;