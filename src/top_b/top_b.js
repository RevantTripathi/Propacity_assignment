import React from 'react';
import './top_b.css'; 
import star from './star.png';

const TopNav = () => {
  return (
    <>
      <div className="tp_nv">
        <div className="star_logo"><img src={star} alt="My Logo" /></div>
        <div className="search">
          <input
            type="text"
            placeholder="Search here"
          />
        </div>

      </div>
    </>


  );
};

export default TopNav;