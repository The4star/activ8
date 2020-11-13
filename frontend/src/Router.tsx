import React from 'react';
import { observer } from 'mobx-react-lite';
import { Switch, Route, withRouter, RouteComponentProps } from 'react-router-dom';


// components
import Home from './pages/Home';
import Activities from './pages/Activities'
import ActivityForm from './components/forms/ActivityForm';
import ActivityDetails from './components/activities/activityDetails/ActivityDetails';
import NotFound from './components/general/not-found/NotFound';

const Router = ({location}:RouteComponentProps) => {

  return(
    <>
      <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/activities' component={Activities}/>
          <Route path='/activities/:id' component={ActivityDetails} />
          <Route key={location.key} path={["/createactivity", '/edit/:id']} component={ActivityForm} />
          <Route component={NotFound} />
      </Switch>
    </>
  )
}

export default withRouter(observer(Router));