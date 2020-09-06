import React, { Fragment, SyntheticEvent, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import Grid from '@material-ui/core/Grid';

// types
import { IActivity } from '../../../types/activities.types'

// components
import ActivityList from './ActivityList';
import ActivityDetails from './ActivityDetails';
import ActivityForm from '../../forms/ActivityForm';
import Skeleton from '@material-ui/lab/Skeleton';

// stores
import ActivityStore from '../../../stores/activityStore';
interface IProps {
  createActivity: (activity:IActivity) => void;
  editActivity: (activity:IActivity) => void;
  deleteActivity: (e: SyntheticEvent<HTMLButtonElement>, activityId: string) => void;
  submitting: boolean;
  buttonTarget: string;
}

const ActivitiesDashboard = ({
  createActivity,
  editActivity,
  deleteActivity,
  submitting,
  buttonTarget 
}:IProps) => {  
  const activityStore = useContext(ActivityStore);
  const { activities, selectedActivity, editMode } = activityStore;

  return (
    <Grid className="activities-dashboard" container wrap="wrap-reverse" justify="center" >
      <Grid item xs={12} sm={6} >
        {
          activities.length ?
            <ActivityList  
              deleteActivity={deleteActivity}
              submitting={submitting}
              buttonTarget={buttonTarget}
            />
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
      <Grid item xs={12} sm={4} >
        {
          selectedActivity && !editMode ?
          <ActivityDetails />
          : <Fragment />
        }
        {
          editMode &&
          <ActivityForm 
            key={selectedActivity ? selectedActivity.id : 0} 
            createActivity={createActivity}
            editActivity={editActivity}
            submitting={submitting}
          />
        }
        
      </Grid>
    </Grid>
  )
}

export default observer(ActivitiesDashboard);