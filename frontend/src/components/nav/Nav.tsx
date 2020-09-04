import React from 'react';


// components
import NavBarOption from './NavOption'
import NavButton from './NavButton';

interface IProps {
  openCreateForm: () => void;
}

const NavBar = ({openCreateForm}:IProps) => {

  return (
    <div className="nav">
      <div className="nav__options">
        <NavBarOption title="Activ8" link="/"/>
        <NavBarOption title="Activities" link="/activities"/>
        <NavButton buttonFunction={openCreateForm} title="New Activity" />
      </div>
    </div>
  );
}

export default NavBar;