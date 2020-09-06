import React, {SyntheticEvent, useContext} from 'react'
import { observer } from 'mobx-react-lite';
import spacetime from 'spacetime';

// types
import { IActivity } from '../../../types/activities.types'

// components
import CircularProgress from '@material-ui/core/CircularProgress';

// stores
import ActivityStore from '../../../stores/activityStore';
interface IProps {
  deleteActivity: (e: SyntheticEvent<HTMLButtonElement>, activityId: string) => void;
  submitting: boolean;
  buttonTarget:string;
}

const ActivityList = ({ 
  deleteActivity, 
  submitting, 
  buttonTarget
}:IProps) => {
  const activityStore = useContext(ActivityStore);
  const { selectActivity, activities } = activityStore;
  const renderActivity = (activity: IActivity) => {
    return(
      <div key={activity.id} className="activities-dashboard__list__item">
        <h3>{activity.title}</h3>
        <p className="activities-dashboard__list__item__date">{spacetime(activity.date).format("nice")}</p>
        <div className="activities-dashboard__list__item__description">
          <p>{activity.description}</p>
          <p>{activity.city}, {activity.venue}</p>
        </div>
        <div className="activities-dashboard__list__item__category">
          {activity.category}
        </div>
        <div className="activities-dashboard__list__item__cta-section">
          <div className="button-wrapper">
            <button name={activity.id} onClick={(e: SyntheticEvent<HTMLButtonElement>) => deleteActivity(e, activity.id)} className="activities-dashboard__list__item__cta-section__delete-button">Delete</button>
            {submitting && buttonTarget === activity.id && <CircularProgress size={24} className="button-progress" />}
          </div>
          <button onClick={() => selectActivity(activity.id)} className="activities-dashboard__list__item__cta-section__view-button">View</button>
        </div>
        
      </div>
    )
  }

  return (
    <div className="activities-dashboard__list">
      {
        activities.map(activity => {
         return renderActivity(activity)
        })
      }
    </div>
    
  )
}

export default observer(ActivityList)