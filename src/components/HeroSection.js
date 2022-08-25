import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Typical from 'react-typical'

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>Best IT Solution</h1>
      <div className="text-white text-xl">
          
          <h2>
          We {' '}
              <Typical
            
            loop={Infinity}
            wrapper="b"
            steps={['Design System', 2000,'Develope Solution', 2000, 'Build Software Solution', 2000]}
          />
          </h2>
          </div>
      
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          Our Services <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
