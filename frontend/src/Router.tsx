import React from 'react';
import { observer } from 'mobx-react-lite';
import { Switch, Route } from 'react-router-dom';


// components
import Home from './pages/Home';
import Activities from './pages/Activities'
import ActivityForm from './components/forms/ActivityForm';
import ActivityDetails from './components/activities/dashboard/ActivityDetails';

const Router = () => {

  return(
    <>
      <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/activities' component={Activities}/>
          <Route path='/activities/:id' component={ActivityDetails} />
          <Route path={["/createactivity", '/edit/:id']} component={ActivityForm} />
      </Switch>
    </>
  )
}

export default observer(Router);