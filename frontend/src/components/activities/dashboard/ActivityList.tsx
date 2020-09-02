import React from 'react'
import spacetime from 'spacetime';
// types
import { IActivity } from '../../../types/activities.types'

interface IProps {
  activities: IActivity[];
  selectActivity: (id:string) => void;
}

const ActivityList = ({activities, selectActivity}:IProps) => {

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
        <button onClick={() => selectActivity(activity.id)} className="activities-dashboard__list__item__view-button">View</button>
      </div>
    )
  }

  return (
    <div className="activities-dashboard__list">
      {
        activities.map(activity => (
          renderActivity(activity)
        ))
      }
    </div>
    
  )
}

export default ActivityList