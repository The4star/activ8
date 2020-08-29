import React from 'react';


// components
import NavBarOption from './NavOption'
import NavButton from './NavButton';

const NavBar = () => {

  return (
    <div className="nav">
      <div className="nav__options">
        <NavBarOption title="Activ8" link="/"/>
        <NavBarOption title="Activities" link="/activities"/>
        <NavButton title="New Activity" />
      </div>
    </div>
  );
}

export default NavBar;