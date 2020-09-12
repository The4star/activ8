import React, {useEffect, useContext } from 'react';
import { observer } from 'mobx-react-lite';

import ActivitiesDashboard from '../components/activities/dashboard/ActivitiesDashboard';

// store
import ActivityStore from '../stores/activityStore';
import LayoutWithNav from '../components/layouts/LayoutWithNav';

const Activities = () => {

  const activityStore = useContext(ActivityStore)
  const {getActivities } = activityStore;

  useEffect(() => {
    getActivities();
  }, [getActivities])

    return (
      <LayoutWithNav>
        <div className="container">
          <ActivitiesDashboard />
        </div>
      </LayoutWithNav>
    )
}

export default observer(Activities);