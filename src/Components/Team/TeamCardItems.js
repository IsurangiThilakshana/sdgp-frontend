import React from 'react';
// import { Link } from 'react-router-dom';

function TeamCardItem(props) {
  return (
    <>
      <div className='cardsItems'>
        {/* <Link className='ToCardItem' to={props.path}>  */}
        <div className='cardWrapper'>
          <figure className='pictureWrapper' data-category={props.label}>
            <img
              className='Images'
              alt='Images for features'
              src={props.src}
            />
          </figure>
          <div className='memberDetails'>
            <h5 className='memberDetailsText'>{props.text}</h5>
          </div>
        {/* </Link> */}
        </div>
      </div>
    </>
  );
}


export default TeamCardItem;
