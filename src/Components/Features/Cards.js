import React from 'react';
import './Features.css';
import CardItem from './Features';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our solutions!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/icon6.png'
              text=''
              label='Add'
            />
            <CardItem
              src='images/icon3.png'
              text='Recognize disease-related blood laboratory patterns that are beyond medical knowledge'
              label='Search'
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='images/icon2.png'
              text='Many Users'
              label='Share'
            />
            
            <CardItem
              src='images/icon4.png'
              text='Help patients to be better informed about the outcome of their blood tests'
              label='About'
            />
            <CardItem
              src='images/icon5.png'
              text='Gather patients blood test results and predict the right disease'
              label='Update'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
