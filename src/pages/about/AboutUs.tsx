import React from 'react';
import './AboutUs.scss';
import ContactForm from './contactForm.jsx';
import { MailOutline, LocationOn, Phone} from '@material-ui/icons';

const AboutUs = () => {
    return (<div className="about-us">
        {/* Location | Hours | Contact Form | Google map | Phone Number | email | About */}
        {/* TODO:
            banner background
            mobile layout
            desktop layout
            contact styling
        */}
        <div> Welcome to Stadiums, Milwalkie's premier sports bar where we provide a white color experience at blue color prices, we do this by making our food in house using high quality local ingredients and by hiring experienced, friendly wait staff.</div>
        <div className="googleMapGoesHere"></div>
        <div className="contactInfo">
            <p>
                <LocationOn className="icon" fontSize="small"/>16065 SE McLoughlin Blvd <br/> Milwaukie, OR 97267 <br/>
                <MailOutline className="icon" fontSize="small"/>info@stadiumssportsgrill.com <br/>
                <Phone className="icon" fontSize="small"/>503-305-8410
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