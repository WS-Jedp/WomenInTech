import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardSmall from '../../components/CardSmall/CardSmall';
import { Link } from 'react-router-dom';
import {  getDate } from '../../services/GetData'

// Styles
import './DetailStyles.css';

// Components
import CardDetail from '../../components/CardDetail/CardDetail';

function Detail() {
  const [ loading, useLoading ] = useState(true);
  const [ data, useData ] = useState({})
  useEffect( () => {
    getDate(year).then( (data) => {
      useData(data);
      useLoading(false);
    }

    )
  } 
  ) ;
  let { year } = useParams();
  return (
    <section className="padding-big detail">
      <div className="detail__header">
        <div className="detail__header-title">
          <Link to="/dates">
            <img src="../../src/assets/Images/left_arrow.svg" alt="" srcset="" />
          </Link>
          <h2 className="text-color-main">1800 - Algorithms</h2>
        </div>
        <hr className="bg-color-main" />
      </div>

      <CardDetail />
      <div className="detail__thumbnails">
        <CardSmall />
        <CardSmall />
        <CardSmall />
      </div>

    </section>
  );
}

export default Detail;
