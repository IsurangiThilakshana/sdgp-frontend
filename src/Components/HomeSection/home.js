
import React from 'react';
import '../../App.css';
import { Button } from '../Navgationbar/Button';
import './Home.css';

function HomeSection() {
  return (
    <div className='hero-container'>
      {/* <video src='images/video2.mp4' autoPlay loop muted /> */}
      <h1>Hololab</h1>
      <p>Empowering differential diagnosis</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
    
      </div>
    </div>
  );
}

export default HomeSection;
