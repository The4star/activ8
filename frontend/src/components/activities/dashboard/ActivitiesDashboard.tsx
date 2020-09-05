import React, { Fragment, SyntheticEvent } from 'react';
import Grid from '@material-ui/core/Grid';

// types
import { IActivity } from '../../../types/activities.types'
// components
import ActivityList from './ActivityList';
import ActivityDetails from './ActivityDetails';
import ActivityForm from '../../forms/ActivityForm';
import Skeleton from '@material-ui/lab/Skeleton';
interface IProps {
  activities: IActivity[];
  selectActivity: (id:string) => void;
  setSelectedActivity: (activity: IActivity | null) => void;
  selectedActivity: IActivity | null;
  editMode: boolean;
  setEditMode: (editMode: boolean) => void;
  createActivity: (activity:IActivity) => void;
  editActivity: (activity:IActivity) => void;
  deleteActivity: (e: SyntheticEvent<HTMLButtonElement>, activityId: string) => void;
  submitting: boolean;
  buttonTarget: string;
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
  deleteActivity,
  submitting,
  buttonTarget 
}:IProps) => {
  return (
    <Grid className="activities-dashboard" container wrap="wrap-reverse" justify="center" >
      <Grid item xs={12} sm={6} >
        {
          activities.length ?
            <ActivityList 
              activities={activities} 
              selectActivity={selectActivity}
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
            submitting={submitting}
          />
        }
        
      </Grid>
    </Grid>
  )
}

export default ActivitiesDashboard;