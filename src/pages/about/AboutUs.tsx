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
        <div className="desktop-layout">
            <div className="aboutUs-background"> </div>
            <div className="aboutusInfo"> Welcome to Stadiums, Milwalkie's premier sports bar where we provide a white collar experience at blue collar prices, we do this by making our food in house using high quality local ingredients and by hiring experienced, friendly wait staff.</div>
            <div className="content-wrapper">
                <div className="content-wrapper info">
                    <div className="contactInfo">
                        <p>
                            <LocationOn className="icon" fontSize="small"/>16065 SE McLoughlin Blvd <br/> Milwaukie, OR 97267 <br/>
                            <MailOutline className="icon" fontSize="small"/>info@stadiumssportsgrill.com <br/>
                            <Phone className="icon" fontSize="small"/>503-305-8410
                        </p>
                    </div>
                    <div className="opperationInfo">
                        <h3> HOURS OF OPERATION </h3>
                        <p>
                            Saturday 10AM to 11PM <br/>
                            Sunday 10AM to 10PM <br/>
                            Monday and Tuesday noon to 10 PM <br/>
                            Wednesday noon to 11PM <br/>
                            Thursday and Friday 11AM to 11PM
                        </p>
                    </div>
                </div>
                <ContactForm />
            </div>
        </div>
        <div className="mobile-layout">
            <div className="aboutUs-background"> </div>
            <div className="aboutusInfo"> Welcome to Stadiums, Milwalkie's premier sports bar where we provide a white collar experience at blue collar prices, we do this by making our food in house using high quality local ingredients and by hiring experienced, friendly wait staff.</div>
            <div className="content-wrapper">
                <div className="content-wrapper info">
                    <div className="contactInfo row">
                        <div className="column"><LocationOn className="icon" fontSize="small"/> 16065 SE McLoughlin Blvd Milwaukie, OR 97267</div>
                        <div className="column"><MailOutline className="icon" fontSize="small"/> info@stadiumssportsgrill.com</div>
                        <div className="column"><Phone className="icon" fontSize="small"/> 503-305-8410</div>
                    </div>
                    <div className="opperationInfo row">
                        <div className="column">Mon <div>12pm-10pm</div></div>
                        <div className="column">Tue <div>12pm-10pm</div></div>
                        <div className="column">Wed <div>12pm-11pm</div></div>
                        <div className="column">Thr <div>11am-11pm</div></div>
                        <div className="column">Fri <div>11am-11pm</div></div>
                        <div className="column">Sat <div>10am-11pm</div></div>
                        <div className="column">Sun <div>10am-10pm</div></div>
                    </div>
                </div>
            </div>
            <ContactForm />
        </div>
    </div>);
};

export default AboutUs;