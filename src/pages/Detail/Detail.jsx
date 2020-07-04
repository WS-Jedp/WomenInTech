import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {  getDate } from '../../services/GetData'

// Styles
import './DetailStyles.css';

// Components
import CardDetail from '../../components/CardDetail/CardDetail';
import CardSmall from '../../components/CardSmall/CardSmall';
import Loading from '../../components/Loading/Loading';

function Detail() {
  let { year, id } = useParams();
  const [ loading, useLoading ] = useState(true);
  const [ data, useData ] = useState({})

  useEffect( () => {
    getDate(year).then( (data) => {
      useData(data);
      useLoading(false);
    })}, []);

  return (
    <section className="padding-big detail">
      {
        loading != false ? <Loading /> : (
          <>
            <div className="detail__header">
              <div className="detail__header-title">
                <Link to="/dates">
                  <img src="../../src/assets/Images/left_arrow.svg" alt="left arrow" />
                </Link>
                <h2 className="text-color-main">{data.year} - {data.title}</h2>
              </div>
              <hr className="bg-color-main" />
            </div>

            <CardDetail id={data.women[id].id} name={data.women[id].name} description={data.women[id].description} img={data.women[id].image} />
            <div className="detail__thumbnails">
              {
                (data.women.map(women => <CardSmall key={women.id} year={data.year} name_women={women.name} img={women.image} id={women.id-1}/>))
              }
            </div>
          </>
        )
      }
    </section>
  );
}

export default Detail;
