import React, { Fragment, useContext, useEffect } from 'react'
import { withRouter } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import Grid from '@material-ui/core/Grid';
// import spacetime from 'spacetime';

// stores
import ActivityStore from '../../../stores/activityStore';

// components
import LayoutWithNav from '../../layouts/LayoutWithNav';
import { RouteComponentProps } from 'react-router-dom';
import ActivityDetailsHeader from './ActivityDetailsHeader';
import ActivityDetailsInfo from './ActivityDetailsInfo';
import ActivityDetailsChat from './ActivityDetailsChat';
import ActivityDetailsSideBar from './ActivityDetailsSideBar';

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
          <Grid className="activities-dashboard" container wrap="wrap-reverse" justify="center" >
            <Grid item xs={12} sm={8} >
              <ActivityDetailsHeader />
              <ActivityDetailsInfo />
              <ActivityDetailsChat />
            </Grid>
            <Grid item xs={12} sm={2} >
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