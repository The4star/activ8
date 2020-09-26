import React, {SyntheticEvent, useContext} from 'react'
import { observer } from 'mobx-react-lite';
import {Link} from 'react-router-dom';
import spacetime from 'spacetime';
import { IActivity } from '../../../types/activities.types';

// components
import CircularProgress from '@material-ui/core/CircularProgress';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

// stores
import ActivityStore from '../../../stores/activityStore';
import RoomIcon from '@material-ui/icons/Room';
interface IProps {
  activity: IActivity
}
const ActivityItem = ({activity}:IProps) => {

  const activityStore = useContext(ActivityStore);
  const { submitting, buttonTarget, deleteActivity } = activityStore;
  return (
    <div className="activity-item">
      <div className="activity-item__header">
        <div className="activity-item__image">
          <img src="assets/img/user.png" alt=""/>
        </div>
        <div className="activity-item__title-text">
          <h3>{activity.title}</h3>
          <p>Hosted by: name</p>
        </div> 
      </div>
      <div className="activity-item__time-place">
        <AccessTimeIcon />
        <p className="activity-item__date">{spacetime(activity.date).format("nice")}</p>
        <RoomIcon />
        <p>{activity.city}, {activity.venue}</p>
      </div>  
      <div className="activity-item__attendees">
        <span>Attendees will go here</span>
      </div>
        
        <div className="activity-item__description">
          <p>{activity.description}</p>
        </div>
        <div className="activity-item__category">
          {activity.category}
        </div>
        <div className="activity-item__cta-section">
          <div className="button-wrapper">
            <button name={activity.id} onClick={(e: SyntheticEvent<HTMLButtonElement>) => deleteActivity(e, activity.id)} className="activity-item__delete-button">Delete</button>
            {submitting && buttonTarget === activity.id && <CircularProgress size={24} className="button-progress" />}
          </div>
          <Link to={`activities/${activity.id}`} >
            <button className="activity-item__view-button">View</button>
          </Link>
          
        </div>
        
      </div>
  )
}

export default observer(ActivityItem);
