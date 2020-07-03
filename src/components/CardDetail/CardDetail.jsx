import React from 'react';

// Styles
import './CardDetailStyles.css';

// Images
import women from '../../assets/Images/womenBW.png';

const CardDetail = ({ name, description, img }) => {

  return (
    <article className="bg-color-main padding-normal card-detail">
      <div className="card-detail__content">
        <h2 className="text-color-secondary">{name || 'Grace Murray Hooper'}</h2>
        <hr className="bg-color-secondary" />
        <div className="card-detail__text">
          <p className="text-color-secondary">
          <figure className="figure-image card-detail__image">
              <img src={women} alt={name || 'Grace Murray Hooper'} />
            </figure>
            {description || '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ad fugiat eos. Harum quasi labore debitis ipsa? Numquam architecto at suscipit odio esse voluptatem laboriosam saepe nisi dolorum maiores, distinctio corporis aliquid perspiciatis modi voluptates illum quae. Ratione, omnis at minima quos nostrum rem! Ea.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ad fugiat eos. Harum quasi labore debitis ipsa? Numquam architecto at suscipit odio esse voluptatem laboriosam saepe nisi dolorum maiores, distinctio corporis aliquid perspiciatis modi voluptates illum quae. Ratione, omnis at minima quos nostrum rem! Ea Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ad fugiat eos. Harum quasi labore debitis ipsa? Numquam architecto at suscipit odio esse voluptatem laboriosam saepe nisi dolorum maiores, distinctio corporis aliquid perspiciatis modi voluptates illum quae. Ratione, omnis at minima quos nostrum rem! EaLorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ad fugiat eos. Harum quasi labore debitis ipsa? Numquam architecto at suscipit odio esse voluptatem laboriosam saepe nisi dolorum maiores, distinctio corporis aliquid perspiciatis modi voluptates illum quae. Ratione, omnis at minima quos nostrum rem! Ea.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ad fugiat eos. Harum quasi labore debitis ipsa? Numquam architecto at suscipit odio esse voluptatem laboriosam saepe nisi dolorum maiores, distinctio corporis aliquid perspiciatis modi voluptates illum quae. Ratione, omnis at minima quos nostrum rem! Ea Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ad fugiat eos. Harum quasi labore debitis ipsa? Numquam architecto at suscipit odio esse voluptatem laboriosam saepe nisi dolorum maiores, distinctio corporis aliquid perspiciatis modi voluptates illum quae. Ratione, omnis at minima quos nostrum rem! fin'}
           
          </p>

        </div>

      </div>

    </article>
  );
}

export default CardDetail;
