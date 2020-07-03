import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import './WelcomeStyles.css';

class Welcome extends React.Component {
  constructor() {
    super()
  }

  render() {

    return (
      <Link to='/dates'>
        <section className="welcome__container" style={{ backgroundImage: "url('../../src/assets/Images/background_welcome.png')" }}>
          <h1 className="welcome__tittle text-color-main padding-normal">Honoring women in tech</h1>
          <img className="welcome__image" src="../../src/assets/Images/arms.svg" alt="Honoring women in tech" />
          <button className="margin-normal button-primary">Know More</button>
        </section>
      </Link >
    );
  }
}

export default Welcome;
