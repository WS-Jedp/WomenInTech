import React from 'react';
import { useParams } from 'react-router-dom';

// Styles
import './DetailStyles.css';

function Detail(){
    let { name } = useParams();
    return(
      <section>
        <h1>Hello World From Detail, the details is: {name }</h1>
      </section>
    );
}

export default Detail;
