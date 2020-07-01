import React from 'react';

// Styles
import './HomeStyles.css';

// Components
import Sidebar from '../../components/Sidebar/Sidebar';

const Home = ({children}) => {

  return(
    <>
      <Sidebar />
      <section>
        {children}
      </section>
    </>
  );

}

export default Home;
