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
      // validation?
      alert('A name was submitted: ' + this.state.comment);
      event.preventDefault();
      // popup to thank them for their feedback
    }
  
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="contact-form">
                <input type="text" placeholder="name" name="name" />
                <input type="text" placeholder="email" name="email" />
                <input type="text" placeholder="phone number" name="phone" />
                <input type="textarea" onChange={this.handleChange} value={this.state.comment} required="true" cols="30" rows="5" className="comments" placeholder="comments" name="comments" />
                <input type="submit" value="Submit" />
            </form>
        )
    }
};

export default ContactForm;