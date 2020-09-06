import React, { Fragment, SyntheticEvent} from 'react';
import { observer } from 'mobx-react-lite';

// types 
import {IActivity} from '../types/activities.types'
import ActivitiesDashboard from '../components/activities/dashboard/ActivitiesDashboard';

// stores
interface IProps {
  createActivity: (activity:IActivity) => void;
  editActivity: (activity:IActivity) => void;
  deleteActivity: (e: SyntheticEvent<HTMLButtonElement>, activityId: string) => void;
  submitting: boolean,
  buttonTarget: string;
}
const Activities = ({
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

export default observer(Activities);