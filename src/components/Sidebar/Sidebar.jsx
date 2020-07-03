import React, {useState, useEffect} from 'react';
import { NavLink, Link} from 'react-router-dom';

// Styles
import './SidebarStyles.css'

const Sidebar = () => {

  const [stateMenu, setStateMenu] = useState(false);

  window.matchMedia('(max-width: 800px)').addListener(() => {
    const sidebar = document.getElementsByClassName('sidebar')[0];
    if(window.matchMedia('(max-width: 800px)')) sidebar.style.width = '30%';
    else sidebar.style.width = '10%';
  })

  const handleMenu = () => {
    const sidebar = document.getElementsByClassName('sidebar')[0];
    const content = document.getElementById('menu--content');
    const msg = `Women In Tech it's a project that born for honoring the women that are worked so hard in the are of the technology but still doesn't have the reputation that deserve.
    <br/> <br/>
    Enjoy this travel trough the history of the evolution of tech thanks to women.`;
    const title = `Women In Tech`

        if (stateMenu){
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
          <br/> <br/>
          Enjoy this travel trough the history of the evolution of tech thanks to women.
        </p>
        <hr className="bg-color-secondary" />
        <span>
          <h1 className="text-color-secondary">Q</h1>
        </span>
      </article>

      {/* Footer of the Sidebar */}
      <footer className="sidebar__footer">
      <ul>
        <li>
          <Link to="/welcome">Go to Welcome Page</Link>
        </li>
        <li>
          <Link to="/dates">Go to Dates Pages</Link>
        </li>
        <li>
          <Link to="/detail">Go to Detail Pages</Link>
        </li>
      </ul>
      </footer>

      {/* Responsive Sidebar */}
      <div className="sidebar__menu">
        <span onClick={() => handleMenu()}>
          menu
        </span>

          <div className="sidebar__menu--content">
            <hr/>
              <p className="h2" id="menu--content">
                Women In Tech
              </p>
            <hr/>
          </div>

        <h1 className="text-color-secondary">Q</h1>
      </div>
    </aside>
  );
}

export default Sidebar;
