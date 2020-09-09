import React, {useEffect, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Switch, Route } from 'react-router-dom';


// components
import Nav from './components/nav/Nav';
import Home from './pages/Home';
import Activities from './pages/Activities'

// store
import ActivityStore from './stores/activityStore';

const Router = () => {
  const activityStore = useContext(ActivityStore)
  const {getActivities, openCreateForm } = activityStore;

  useEffect(() => {
    getActivities();
  }, [getActivities])

  return(
    <>
    <Nav  openCreateForm={openCreateForm}/>
      <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/activities' render={() => (
              <Activities />
            )}  
          />
      </Switch>
    </>
  )
}

export default observer(Router);