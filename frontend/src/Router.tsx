import React, {useState, useEffect, SyntheticEvent } from 'react';
import { Switch, Route } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

// components
import Nav from './components/nav/Nav';
import Home from './pages/Home'
import Activities from './pages/Activities'

import { ActivitiesApi } from './api/agent';

import {IActivity} from './types/activities.types'

const Router = () => {

  const [activities, setActivities ] = useState<IActivity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<IActivity | null >(null);
  const [editMode, setEditMode ] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [buttonTarget, setButtonTarget] = useState<string>("");

  useEffect(() => {
    getActivities()
  }, [])

  const openCreateForm = () => {
    setSelectedActivity(null);
    setEditMode(true);
  }

  const handleSelectActivity = (id: string) => {
    const activity = activities.find(a => a.id === id)
    
    if(activity !== undefined) {
      setSelectedActivity(activity)
      setEditMode(false)

      setTimeout(() => {
        const activityDetails = document.querySelector('.activity-details');
        if (activityDetails) {
          activityDetails.scrollIntoView({behavior:"smooth", block: "center"})
        }
      }, 200);
    }
    
  }

  const createActivity = async (activity: IActivity) => {
    try {
      setSubmitting(true);
      activity.id = uuid()
      await ActivitiesApi.create(activity);
      getActivities()
      setSelectedActivity(activity);
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
      getActivities()
      setSelectedActivity(activity);
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
      getActivities()
      setSelectedActivity(null)
      setEditMode(false) 
      setSubmitting(false)
    } catch (error) {
      console.log(error)
    }
    
  }
  
  const getActivities = async () => {
    const response = await ActivitiesApi.list();
    const activities:IActivity[] = []
    
    response.forEach(activity => {
      activity.date = activity.date.split(".")[0]
      activities.push(activity);
    })

    setActivities(activities);
  }  

  return(
    <>
    <Nav  openCreateForm={openCreateForm}/>
      <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/activities' render={() => (
              <Activities 
                activities={activities}
                selectedActivity={selectedActivity} 
                setSelectedActivity={setSelectedActivity}
                editMode={editMode}
                setEditMode={setEditMode} 
                handleSelectActivity={handleSelectActivity}
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

export default Router;