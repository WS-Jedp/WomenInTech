import React from 'react';

// Styles
import './StylesDates.css';

// Components
import CardDate from '../../components/CardDate/CardDate';

class Dates extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
        <section className="dates-section">
          <CardDate />
          <CardDate />
          <CardDate />
          <CardDate />
          <CardDate />
          <CardDate />
        </section>
    );
  }
}

export default Dates;
