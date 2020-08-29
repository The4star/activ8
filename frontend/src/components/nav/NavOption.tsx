import React from 'react';
import { Link } from 'react-router-dom';

interface IProps  {
  title: string;
  link: string;
  image?: string
}

const NavBarOption = ({title, link, image}:IProps) => {

  return (
    
      <div className="nav__options__option">
        <Link to={link} className="nav__options__option__link">
          { title }
        </Link>
      </div>
    
  );
}

export default NavBarOption;