import React, { useState } from 'react';
import './Contact.css';
import { Button, Typography } from '@mui/material';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const contactFormHandler=(e)=>{
    e.preventDefault();
  }
  return (
    <div className="contact">
      <div className="contactRightBar"></div>
      <div className="contactContainer">
        <form onSubmit={contactFormHandler} className="contactContainerForm">
          <Typography variant="h4">Contact Us</Typography>
          <input required
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input required
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea required
            placeholder="Message"
            cols="30"
            rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}></textarea>
          <Button
            type="submit"
            variant="contained">
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
