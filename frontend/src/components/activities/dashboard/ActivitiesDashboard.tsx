import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';

// types
import { IActivity } from '../../../types/activities.types'
// components
import ActivityList from './ActivityList';
import ActivityDetails from './ActivityDetails';
import ActivityForm from '../../forms/ActivityForm';
interface IProps {
  activities: IActivity[];
  selectActivity: (id:string) => void;
  setSelectedActivity: (activity: IActivity | null) => void;
  selectedActivity: IActivity | null;
  editMode: boolean;
  setEditMode: (editMode: boolean) => void;
  createActivity: (activity:IActivity) => void;
  editActivity: (activity:IActivity) => void;
  deleteActivity: (activityId: string) => void;
}

const ActivitiesDashboard = ({
  activities, 
  selectActivity, 
  setSelectedActivity, 
  selectedActivity, 
  editMode, 
  setEditMode,
  createActivity,
  editActivity,
  deleteActivity 
}:IProps) => {
  return (
    <Grid className="activities-dashboard" container wrap="wrap-reverse" justify="center" >
      <Grid item xs={12} sm={6} >
        <ActivityList 
          activities={activities} 
          selectActivity={selectActivity}
          deleteActivity={deleteActivity}
        />
      </Grid>
      <Grid item xs={12} sm={4} >
        {
          selectedActivity && !editMode ?
          <ActivityDetails 
            selectedActivity={selectedActivity} 
            setSelectedActivity={setSelectedActivity} 
            setEditMode={setEditMode}
          />
          : <Fragment />
        }
        {
          editMode &&
          <ActivityForm 
            key={selectedActivity ? selectedActivity.id : 0} 
            setEditMode={setEditMode} 
            selectedActivity={selectedActivity} 
            createActivity={createActivity}
            editActivity={editActivity}
          />
        }
        
      </Grid>
    </Grid>
  )
}

export default ActivitiesDashboard;