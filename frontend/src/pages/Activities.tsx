import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios';

// types 
import {IActivity} from '../types/activities.types'
import ActivitiesDashboard from '../components/activities/dashboard/ActivitiesDashboard';

const Activities = () => {
  const [activities, setActivities ] = useState<IActivity[]>([])
  
  useEffect(() => {
    getActivities()
  }, [])
  
  const getActivities = async () => {
    const response = await axios.get<IActivity[]>('http://localhost:5000/api/activities');
    setActivities(response.data);
  }  

    return (
      <Fragment>
        <div className="main">
          <div className="container">
            <ActivitiesDashboard activities={activities} />
          </div>
        </div>
      </Fragment>
        
    )
}

export default Activities;