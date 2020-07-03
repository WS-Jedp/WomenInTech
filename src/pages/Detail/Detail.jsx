import React from 'react';
import { useParams } from 'react-router-dom';

// Styles
import './DetailStyles.css';

// Components
import CardDetail from '../../components/CardDetail/CardDetail';

function Detail(){
    // let { name } = useParams();
    return(
      <section className="padding-big detail">
        <div>
          <h2 className="text-color-main">1800 - Algorithms</h2>
          <hr className="bg-color-main" />
          <CardDetail />
        </div>
      </section>
    );
}

export default Detail;
