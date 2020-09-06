import React, { Fragment, useContext } from 'react'
import { observer } from 'mobx-react-lite';
import spacetime from 'spacetime';

// stores
import ActivityStore from '../../../stores/activityStore';

const ActivityDetails = () => {
  const activityStore = useContext(ActivityStore);
  const { selectActivity, selectedActivity, setEditMode  } = activityStore;

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
          <button onClick={() => setEditMode(true)}>Edit</button>
          <button onClick={() => selectActivity(undefined)}>Close</button>
        </div>
      </div>
    )
  } else {
    return (
      <Fragment />
    ) 
  }
}

export default observer(ActivityDetails);