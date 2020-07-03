import React from 'react';

// Styles
import './CardSmallStyles.css';
import women from '../../assets/Images/womenBW.png';

const CardSmall = ({ year, title, name_women, description, img }) => {

  return (
    <article className="card-small">
      <div className="card-small__info" >
        <h2>{name_women || 'Grace Murray Hooper'}</h2>
      </div>

      <figure className="card-small__figure">
        <div className="card-small__border-image">
        </div>
          <img src={women} alt="" />
      </figure>
    </article>
  );
}

export default CardSmall;
