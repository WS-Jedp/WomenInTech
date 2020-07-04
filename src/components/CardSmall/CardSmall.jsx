import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import './CardSmallStyles.css';

const CardSmall = ({ id, year, title, name_women, description, img }) => {

  return (
    <Link to={`/detail/${year}/${id}`} className="card-small">
        <div className="card-small__info" >
          <h2>{name_women || 'Grace Murray Hooper'}</h2>
        </div>

        <figure className="card-small__figure">
          <div className="card-small__border-image">
          </div>
            <img src={img} alt={name_women} />
        </figure>
    </Link>
  );
}

export default CardSmall;
