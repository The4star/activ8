import React, { Fragment } from 'react';
import { observer } from 'mobx-react-lite';

import ActivitiesDashboard from '../components/activities/dashboard/ActivitiesDashboard';

const Activities = () => {
    return (
      <Fragment>
        <div className="main">
          <div className="container">
            <ActivitiesDashboard />
          </div>
        </div>
      </Fragment>
        
    )
}

export default observer(Activities);