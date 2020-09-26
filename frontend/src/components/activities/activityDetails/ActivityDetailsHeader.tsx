import React from 'react'
import { observer } from 'mobx-react-lite';
import { IActivity } from '../../../types/activities.types';
import spacetime from 'spacetime';

interface IProps {
  activity: IActivity;
}

const ActivityDetailsHeader = ({ activity }: IProps) => {

  return (
    <div className="activity-details-header">
      <div className="activity-details-header__title-area">
        <img src={`/assets/img/categoryImages/${activity.category}.jpg`} alt={`${activity.category}`}/>
        <div className="activity-details-header__title-text">
          <h2>{activity.title}</h2>
          <p>{spacetime(activity.date).format("nice")}</p>
          <p>Hosted by <strong>Host</strong></p>
        </div>
        
      </div>
      <div className="activity-details-header__selection-area">
          <button className="activity-join">Join</button> 
          <button className="activity-cancel">Cancel</button>
          <button className="activity-manage">Manage</button>
      </div>
    </div>
  )
}

export default observer(ActivityDetailsHeader)
