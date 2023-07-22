import React from 'react'
import './Footer.css'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='footer'>
        <div>
      <Typography variant='h5' >About Me</Typography>
      <Typography>
      Hey, my name is Nitish Chaurasiya. I am a Full-Stack Developer and a
          tutorial on Youtube channel called <b> Nitish Coderr</b> </Typography>
      

      <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
    </div>
    <div>
    <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/Nitishcoderr" target="black">
          <BsGithub />
        </a>
        <a href="https://youtube.com/" target="black">
          <BsYoutube />
        </a>
        <a href="https://www.instagram.com/the_nameis_nitish/" target="black">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/nitish-chaurasiya/" target="black">
          <BsLinkedin />
        </a>
        </div>


    </div>
  )
}

export default Footer
