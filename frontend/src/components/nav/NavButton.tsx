import React from 'react';

interface IProps {
  title: string;
  link?:string
}
const NavButton = ({title, link}:IProps) => {
  return( 
    <button className="nav__options__button">
      {title}
    </button>
  )
}

export default NavButton