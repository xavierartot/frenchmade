import React from 'react';
import ContactForm from './ContactForm';
import MapContact from './MapContact';

const Contact = () => (
  <div className="contact__bx">
    <div className="row justify-content-center">
      <h1 className="font-weight-light m-3">Contact</h1>
    </div>
    <div className="contact row mr-2 ml-2">
      <div className="col-6">
        <ContactForm />
      </div>
      <div className="col-6">
        <MapContact />
      </div>
    </div>
  </div>
);
export default Contact;
