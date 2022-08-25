import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out top services!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/software-development.jpg'
              text='Software Development'
              label='Development'
              path='/services'
            />
            <CardItem
              src='images/web-application.png'
              text='Web Application Development'
              label='Development'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/it-training.jpg'
              text='IT Training'
              label='Training'
              path='/services'
            />
            <CardItem
              src='images/Technology-Consultant.jpg'
              text='Technology Consultancy'
              label='Consultancy'
              path='/services'
            />
            <CardItem
              src='images/project-planning.jpg'
              text='Project Planning and Management'
              label='Planning'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
