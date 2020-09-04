import React, {useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import axios from 'axios';

// components
import Nav from './components/nav/Nav';
import Home from './pages/Home'
import Activities from './pages/Activities'

import {IActivity} from './types/activities.types'

const Router = () => {

  const [activities, setActivities ] = useState<IActivity[]>([])
  const [selectedActivity, setSelectedActivity] = useState<IActivity | null >(null);
  const [editMode, setEditMode ] = useState<boolean>(false)
  
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

  const createActivity = (activity: IActivity) => {
    activity.id = uuid()
    console.log('created')
    console.log(activity)
  }

  const editActivity = (activity:IActivity) => {
    console.log('edited')
    console.log(activity)
  }

  const deleteActivity = (activityId: string) => {
    console.log('deleted')
    console.log(activityId)
  }
  
  const getActivities = async () => {
    const response = await axios.get<IActivity[]>('http://localhost:5000/api/activities');
    const activities:IActivity[] = []
    
    response.data.forEach(activity => {
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
              />
            )}  
          />
      </Switch>
    </>
  )
}

export default Router;