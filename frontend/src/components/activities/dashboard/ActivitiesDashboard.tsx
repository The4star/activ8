import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import Grid from '@material-ui/core/Grid';

// components
import ActivityList from './ActivityList';
import Skeleton from '@material-ui/lab/Skeleton';

// stores
import ActivityStore from '../../../stores/activityStore';

const ActivitiesDashboard = () => {  
  const activityStore = useContext(ActivityStore);
  const { activities } = activityStore;

  return (
    <Grid className="activities-dashboard" container wrap="wrap-reverse" justify="center" >
      <Grid item xs={12} sm={8} >
        {
          activities.length ?
            <ActivityList />
          :
            <div className="container">
                <Skeleton variant="rect" height={180} width="95%" />
                <div className="seperator">
                  <Skeleton variant="rect" height={180} width="95%" />
                </div>
                <div className="seperator">
                  <Skeleton variant="rect" height={180} width="95%" />
                </div>
                <div className="separseperatorator">
                  <Skeleton variant="rect" height={180} width="95%" />
                </div>
                <div className="seperator">
                  <Skeleton variant="rect" height={180} width="95%" />
                </div>
                <div className="seperator">
                  <Skeleton variant="rect" height={180} width="95%" />
                </div>
            </div>
        }
      </Grid>
      <Grid item xs={12} sm={2} >
        <h2>Activity Filters</h2>
      </Grid>
    </Grid>
  )
}

export default observer(ActivitiesDashboard);