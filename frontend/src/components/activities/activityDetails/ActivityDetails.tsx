import React, { Fragment, useContext, useEffect } from 'react'
import { withRouter } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import Grid from '@material-ui/core/Grid';

// stores
import ActivityStore from '../../../stores/activityStore';

// components
import LayoutWithNav from '../../layouts/LayoutWithNav';
import { RouteComponentProps } from 'react-router-dom';
import ActivityDetailsHeader from './ActivityDetailsHeader';
import ActivityDetailsInfo from './ActivityDetailsInfo';
import ActivityDetailsChat from './activityDetailsChat/ActivityDetailsChat';
import ActivityDetailsSideBar from './activityDetailsSideBar/ActivityDetailsSideBar';

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
          <Grid className="activity-details" container wrap="wrap-reverse" justify="center" >
            <Grid item xs={12} sm={6} >
              <ActivityDetailsHeader activity={selectedActivity} />
              <ActivityDetailsInfo activity={selectedActivity}/>
              <ActivityDetailsChat />
            </Grid>
            <Grid item xs={12} sm={4} >
              <ActivityDetailsSideBar />
            </Grid>
          </Grid>
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