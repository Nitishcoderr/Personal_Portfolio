import React, { useEffect, useState } from 'react';
import './Contact.css';
import { Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import {contactUs} from '../../action/user'

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch()
  const alert = useAlert()

  const {loading,message:alertMessage,error} = useSelector((state)=>state.update)

  const contactFormHandler=(e)=>{
    e.preventDefault();
    dispatch(contactUs(name,email,message))
  }

  useEffect(() => {
    if(error){
        alert.error(error)
        dispatch({type:"CLEAR_ERRORS"})
    }
    if(alertMessage){
        alert.success(alertMessage)
        dispatch({type:"CLEAR_MESSAGE"})
    }
  }, [alert,error,alertMessage,dispatch])
  
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
          <Button disabled={loading}
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
