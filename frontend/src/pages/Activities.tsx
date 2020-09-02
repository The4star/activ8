import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios';

// types 
import {IActivity} from '../types/activities.types'
import ActivitiesDashboard from '../components/activities/dashboard/ActivitiesDashboard';

const Activities = () => {
  const [activities, setActivities ] = useState<IActivity[]>([])
  const [selectedActivity, setSelectedActivity] = useState<IActivity | null >(null);

  useEffect(() => {
    getActivities()
  }, [])

  const handleSelectActivity = (id: string) => {
    
    const activity = activities.find(a => a.id === id)
    
    if(activity !== undefined) {
      setSelectedActivity(activity)
      
      setTimeout(() => {
        const activityDetails = document.querySelector('.activity-details');
        if (activityDetails) {
          activityDetails.scrollIntoView({behavior:"smooth", block: "center"})
        }
      }, 200);
      
    }
  }
  
  const getActivities = async () => {
    const response = await axios.get<IActivity[]>('http://localhost:5000/api/activities');
    setActivities(response.data);
  }  

    return (
      <Fragment>
        <div className="main">
          <div className="container">
            <ActivitiesDashboard 
              activities={activities} 
              selectActivity={handleSelectActivity}
              selectedActivity={selectedActivity}
            />
          </div>
        </div>
      </Fragment>
        
    )
}

export default Activities;