import React, {useState, useEffect, SyntheticEvent, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Switch, Route } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

// components
import Nav from './components/nav/Nav';
import Home from './pages/Home';
import Activities from './pages/Activities'

// api
import { ActivitiesApi } from './api/agent';

// types
import {IActivity} from './types/activities.types';

// store
import ActivityStore from './stores/activityStore';

const Router = () => {
  const activityStore = useContext(ActivityStore)
  const {getActivities, setEditMode, selectActivity, openCreateForm } = activityStore;
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [buttonTarget, setButtonTarget] = useState<string>("");

  useEffect(() => {
    getActivities();
  }, [getActivities])

  const createActivity = async (activity: IActivity) => {
    try {
      setSubmitting(true);
      activity.id = uuid()
      await ActivitiesApi.create(activity);
      await getActivities();
      selectActivity(activity.id);
      setEditMode(false);      
      setSubmitting(false)
    } catch (error) {
      console.log(error)
    }
    
  }

  const editActivity = async (activity:IActivity) => {
    try {
      setSubmitting(true)
      await ActivitiesApi.update(activity)
      await getActivities();
      selectActivity(activity.id);
      setEditMode(false);
      setSubmitting(false);
    } catch (error) {
      console.log(error)
    }
  }

  const deleteActivity = async (e: SyntheticEvent<HTMLButtonElement>, activityId: string) => {
    try {
      setSubmitting(true)
      setButtonTarget(e.currentTarget.name)
      await ActivitiesApi.delete(activityId);
      await getActivities();
      selectActivity(undefined)
      setEditMode(false) 
      setSubmitting(false)
    } catch (error) {
      console.log(error)
    }
    
  } 
  
  return(
    <>
    <Nav  openCreateForm={openCreateForm}/>
      <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/activities' render={() => (
              <Activities 
                createActivity={createActivity}
                editActivity={editActivity}
                deleteActivity={deleteActivity}
                submitting={submitting}
                buttonTarget={buttonTarget}
              />
            )}  
          />
      </Switch>
    </>
  )
}

export default observer(Router);