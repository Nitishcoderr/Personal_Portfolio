import React from 'react'
import './About.css'
import { Typography } from '@mui/material'
import me from '../../Images/me.png'

const About = () => {
  return (
    <div className='about'>
      <div className="aboutContainer">
        <Typography>This a sample Quart</Typography>
      </div>
      <div className="aboutContainer2">
        <div>
            <img src={me} alt="nitish" className="aboutAvatar" />
            <Typography variant='h4' style={{margin:"1vmax 0",color:"black"}} >Nitish</Typography>
            <Typography >Full Stack Developer</Typography>
            <Typography style={{margin:"1vmax 0"}}>I am a Coderr</Typography>
        </div>
        <div>
            <Typography style={{
                "wordSpacing":"5px",
                "lineHeight":"50px",
                "letterSpacing":"5px",
                "textAlign":"right"
            }} >This is description Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
        </div>
      </div>
    </div>
  )
}

export default About
