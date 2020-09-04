import React, { Fragment } from 'react';

// types 
import {IActivity} from '../types/activities.types'
import ActivitiesDashboard from '../components/activities/dashboard/ActivitiesDashboard';


interface IProps {
  activities: IActivity[];
  selectedActivity: IActivity | null;
  setSelectedActivity: (activity: IActivity | null) => void;
  editMode: boolean;
  setEditMode: (editMode: boolean) => void;
  handleSelectActivity: (id: string) => void;
  createActivity: (activity:IActivity) => void;
  editActivity: (activity:IActivity) => void;
  deleteActivity: (activityId: string) => void;
}
const Activities = ({
  activities, 
  selectedActivity, 
  setSelectedActivity, 
  editMode, 
  setEditMode, 
  handleSelectActivity,
  createActivity,
  editActivity,
  deleteActivity 
}:IProps) => {
    return (
      <Fragment>
        <div className="main">
          <div className="container">
            <ActivitiesDashboard 
              activities={activities} 
              selectActivity={handleSelectActivity}
              setSelectedActivity={setSelectedActivity}
              selectedActivity={selectedActivity}
              editMode={editMode}
              setEditMode={setEditMode}
              createActivity={createActivity}
              editActivity={editActivity}
              deleteActivity={deleteActivity}
            />
          </div>
        </div>
      </Fragment>
        
    )
}

export default Activities;