import React from 'react';

interface IProps {
  title: string;
  link?:string;
  buttonFunction?: () => void;
}
const NavButton = ({title, link, buttonFunction }:IProps) => {
  return( 
    <button onClick={buttonFunction} className="nav__options__button">
      {title}
    </button>
  )
}

export default NavButton