import React from 'react';
import { NavLink, Link} from 'react-router-dom';

// Styles
import './SidebarStyles.css'

const Sidebar = () => {

  return (
    <aside>
      <ul>
        <li>
          <Link to="/welcome">Go to Welcome Page</Link>
        </li>
        <li>
          <Link to="/dates">Go to Dates Pages</Link>
        </li>
        <li>
          <Link to="/detail/name">Go to Detail Pages</Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
