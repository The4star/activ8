import React from 'react';
import { Switch, Route } from 'react-router-dom';

// components
import Nav from './components/nav/Nav';
import Home from './pages/Home'
import Activities from './pages/Activities'

const Router = () => {
  return(
    <>
    <Nav />
      <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/activities' component={Activities} />
      </Switch>
    </>
  )
    
}

export default Router;