import React from 'react';

// Styles
import './HomeStyles.css';

// Components
import Sidebar from '../../components/Sidebar/Sidebar';

const Home = ({children}) => {

  return(
    <>
      <Sidebar />
      <div className="bg-color-dark padding-medium home__content">
        {children}
      </div>
    </>
  );

}

export default Home;
