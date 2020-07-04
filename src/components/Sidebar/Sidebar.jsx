import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

// Styles
import './SidebarStyles.css';


// Components
import Footer from '../Footer/Footer';

const Sidebar = () => {

  const [stateMenu, setStateMenu] = useState(false);

  window.matchMedia('(max-width: 800px)').addListener((ev) => {
    const sidebar = document.getElementsByClassName('sidebar')[0];
    if (!ev.matches) sidebar.style.width = '30%';
    else sidebar.style.width = '10%';
  })

  const handleMenu = () => {

    const sidebar = document.getElementsByClassName('sidebar')[0];
    const content = document.getElementById('menu--content');
    const msg = `
      <h2>Women In Tech</h2>  
      Women In Tech it's a project that born for honoring the women that are worked so hard in the are of the technology but still doesn't have the reputation that deserve.
      <br/> <br/>
      Enjoy this travel trough the history of the evolution of tech thanks to women.`;
    const title = `Women In Tech`

    if (stateMenu) {
      sidebar.style.width = '10%';
      content.innerHTML = title;
      content.style.transform = 'rotate(-90deg)';
      setStateMenu(false);
    } else {
      sidebar.style.width = '100%';
      content.style.transform = 'rotate(0deg)';
      content.innerHTML = msg;
      setStateMenu(true);
    }

  }

  return (
    <aside className="padding-big bg-color-main sidebar">
      <div>

        {/* Title of the sidebar */}
        <div className="sidebar__title">
          <h2 className="text-color-secondary">Women In Tech</h2>
          <h3 className="text-color-secondary">Honoring the history</h3>
        </div>

        {/* Content of the sidebar */}
        <article className="sidebar__content">
          <hr className="bg-color-secondary" />
          <p>
            Women In Tech it's a project that born for honoring the women that are worked so hard in the are of the technology but still doesn't have the reputation that deserve.
          <br /> <br />
          Enjoy this travel trough the history of the evolution of tech thanks to women.
        </p>
          <hr className="bg-color-secondary" />
          <Link to="/dates">
            <h1 className="text-color-secondary sidebar__content-logo">Q</h1>
          </Link>
        </article>

        {/* Footer of the Sidebar */}
        <footer className="sidebar__footer">
          <Footer />
        </footer>

        {/* Responsive Sidebar */}
        <div className="sidebar__menu">
          <span onClick={() => handleMenu()}>
            menu
        </span>

          <div className="sidebar__menu--content">
            <hr />
            <p className="h3" id="menu--content">
              Women In Tech
              </p>
            <hr />
          </div>

          <h1 className="text-color-secondary">Q</h1>
        </div>
      </div>

      <img src="../../src/assets/Images/right_arrow.svg" alt="" className="sidebar__arrow" />

    </aside>
  );
}

export default Sidebar;
