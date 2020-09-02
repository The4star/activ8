import React from 'react';
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
  selectedActivity: IActivity | null;
}

const ActivitiesDashboard = ({activities, selectActivity, selectedActivity}:IProps) => {
  return (
    <Grid className="activities-dashboard" container wrap="wrap-reverse" justify="center" >
      <Grid item xs={12} sm={6} >
        <ActivityList activities={activities} selectActivity={selectActivity}/>
      </Grid>
      <Grid item xs={12} sm={4} >
        {
          selectedActivity &&
          <ActivityDetails selectedActivity={selectedActivity} />
        }
        <ActivityForm />
      </Grid>
    </Grid>
  )
}

export default ActivitiesDashboard;