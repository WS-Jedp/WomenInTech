import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import './CardDateStyles.css';

// Images
import women from '../../assets/Images/womenBW.png';
import womenSquare from '../../assets/Images/womenBWSquare.png';

const CardDate = ({year, title, name, description, img }) => {

  return (
    <article className="padding-medium card-date">
      <h1>{year || '1700' }</h1>
      <hr className='bg-color-light'/>
      <h2>{title || 'Human Computer'}</h2>
      <h3>{name || 'Start Of Computation'}</h3>
      <p>
        {
          description || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut aliquid ex corrupti eligendi dolor.' 
        }
      </p>

      <figure className="margin-medium figure-image">
          <img src={women} alt=""/>
      </figure>

      <Link to='/detail/name'>
        <button className="margin-normal button-primary">
          Go To 
        </button>
      </Link>
    </article>
  );
}

export default CardDate;
