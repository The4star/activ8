import React, { Fragment, useContext, useEffect } from 'react'
import { withRouter } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import spacetime from 'spacetime';

// stores
import ActivityStore from '../../../stores/activityStore';
import LayoutWithNav from '../../layouts/LayoutWithNav';
import { RouteComponentProps } from 'react-router-dom';


interface DetailParams {
  id:string
}
const ActivityDetails = ({match, history}:RouteComponentProps<DetailParams>) => {
  const activityStore = useContext(ActivityStore);
  const { loadActivity, selectedActivity } = activityStore;

  useEffect(() => {
    loadActivity(match.params.id)
  }, [loadActivity, match.params.id])
  
  if (selectedActivity) {
    return (
      <LayoutWithNav>
        <div className="container">
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
              <button onClick={() => history.push(`/edit/${selectedActivity.id}`)}>Edit</button>
              <button onClick={() => history.push('/activities')}>Close</button>
            </div>
          </div>
        </div>
      </LayoutWithNav>
    )
  } else {
    return (
      <Fragment />
    ) 
  }
}

export default withRouter(observer(ActivityDetails));