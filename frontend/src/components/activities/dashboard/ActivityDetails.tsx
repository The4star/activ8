import React from 'react'
import spacetime from 'spacetime';
import { IActivity } from '../../../types/activities.types'


interface IProps {
  selectedActivity: IActivity | null ;
}

const ActivityDetails = ({ selectedActivity }:IProps) => {
  if (selectedActivity) {
    return (
      <div className="activity-details">
        <div className="activity-details__img-container">
          <img src={`/assets/img/categoryImages/${selectedActivity.category}.jpg`} alt="placeholder"/>
        </div>
        <div className="activity-details__text-area">
          <h3>{selectedActivity.title}</h3>
          <p className="activity-details__text-area__date">{spacetime(selectedActivity.date).format("nice")}</p>
          <p>{selectedActivity.description}</p>
        </div>
        <div className="activity-details__button-area">
          <button>Edit</button>
          <button>Cancel</button>
        </div>
      </div>
    )
  } else {
    return (
      <>
      </>
    ) 
  }
}

export default ActivityDetails;