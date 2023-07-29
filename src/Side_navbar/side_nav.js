import React from 'react';
import './side_nav.css'; 
import FolderIcon from '@mui/icons-material/Folder';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const SideNavigation = () => {

  const List = [
    { name: 'Films', icon:<FolderIcon className='nav_icon'/>,icon2:<ArrowForwardIosIcon className='nav_icon2'/> },
    { name: 'People', icon:<FolderIcon className='nav_icon'/>,icon2:<ArrowForwardIosIcon className='nav_icon2'/>},
    { name: 'Planets', icon:<FolderIcon className='nav_icon'/>,icon2:<ArrowForwardIosIcon className='nav_icon2'/> },
    { name: 'Species', icon:<FolderIcon className='nav_icon'/> ,icon2:<ArrowForwardIosIcon className='nav_icon2'/>},
    { name: 'Starships', icon:<FolderIcon className='nav_icon'/> ,icon2:<ArrowForwardIosIcon className='nav_icon2'/>},
    { name: 'Vechicles', icon:<FolderIcon className='nav_icon'/> ,icon2:<ArrowForwardIosIcon className='nav_icon2'/>},
  ];
  return (
    <div className="side-nav">
      <ul>
       
       {List.map((List, index) => (<div className="list">
          <li key={index}>
           {List.icon} 
          {List.name}
          {List.icon2}
          </li></div>))}

       
      </ul>
    </div>
  );
};

export default SideNavigation;