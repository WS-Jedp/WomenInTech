import React from 'react';

// Styles
import './FooterStyles.css';

const Footer = () => {

  return (
    <div className="footer">
      <ul>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 27 27"><text transform="translate(0 24)" fill="#804800" font-size="27" font-family="FontAwesome5Brands-Regular, 'Font Awesome 5 Brands'"><tspan x="0" y="0">github</tspan></text></svg>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 27 27">
            <text id="facebook" transform="translate(0 24)" fill="#804800" font-size="27" font-family="FontAwesome5Brands-Regular, 'Font Awesome 5 Brands'"><tspan x="0" y="0">facebook</tspan></text>
          </svg>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="24" viewBox="0 0 25 27"><text transform="translate(1 24)" fill="#804800" font-size="27" font-family="FontAwesome5Brands-Regular, 'Font Awesome 5 Brands'"><tspan x="0" y="0">instagram</tspan></text></svg>
        </li>
      </ul>
      <small className="text-color-secondary">
        Copyright © - Women In Tech
      </small>
    </div>
  );
}

export default Footer;
