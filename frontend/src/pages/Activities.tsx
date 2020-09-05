import React, { Fragment, SyntheticEvent} from 'react';

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
  deleteActivity: (e: SyntheticEvent<HTMLButtonElement>, activityId: string) => void;
  submitting: boolean,
  buttonTarget: string;
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
  deleteActivity,
  submitting,
  buttonTarget
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
              submitting={submitting}
              buttonTarget={buttonTarget}
            />
          </div>
        </div>
      </Fragment>
        
    )
}

export default Activities;