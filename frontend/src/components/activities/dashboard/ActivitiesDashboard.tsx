import React from 'react';
import Grid from '@material-ui/core/Grid';

// types
import { IActivity } from '../../../types/activities.types'
// components
import ActivityList from './ActivityList';

interface IProps {
  activities: IActivity[];
}

const ActivitiesDashboard = ({activities}:IProps) => {
  return (
    <Grid className="activities-dashboard" container >
      <Grid xs={8} >
        <ActivityList activities={activities} />
      </Grid>
      <Grid xs={4} >
        
      </Grid>
    </Grid>
  )
}

export default ActivitiesDashboard;