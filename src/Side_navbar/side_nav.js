import React from 'react';
import './side_nav.css'; // Import the CSS file for styling

const SideNavigation = () => {
  return (
    <div className="side-nav">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default SideNavigation;