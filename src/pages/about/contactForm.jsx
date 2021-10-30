import React from 'react';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
import './contactForm.scss'

class ContactForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {comment: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({comment: event.target.comment});
    }
  
    handleSubmit(event) {
      // TODO: add https://www.npmjs.com/package/react-google-recaptcha
      // validation?
      alert('A name was submitted: ' + this.state.comment);
      event.preventDefault();
      // popup to thank them for their feedback
    }
  
    render() {
        return (
            <div className="form-wrapper">
              <h3 className="form-header">SEND US A MESSAGE</h3>
              <form onSubmit={this.handleSubmit} className="contact-form">
                  <input type="text" placeholder="name" name="name" />
                  <input type="text" placeholder="email" name="email" />
                  <input type="text" placeholder="phone number" name="phone" />
                  <textarea rows="5" onChange={this.handleChange} value={this.state.comment} required={true} className="comments" placeholder="comments" name="comments"></textarea>
                  <input className="submit-button" type="submit" value="Submit" />
              </form>
            </div>
        )
    }
};

// <input type="textarea" onChange={this.handleChange} value={this.state.comment} required="true" className="comments" placeholder="comments" name="comments" />

export default ContactForm;