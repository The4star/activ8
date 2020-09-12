import React, { Fragment } from 'react'
import Nav from '../nav/Nav'

const LayoutWithNav = (props:any) => {
  return (
    <Fragment>
      <Nav />
      <div className="main">
        {props.children}
      </div> 
    </Fragment>
  )
}

export default LayoutWithNav;
