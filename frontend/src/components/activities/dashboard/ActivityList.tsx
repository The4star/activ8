import React, {useContext} from 'react'
import { observer } from 'mobx-react-lite';
import { monthNames } from '../../helpers/general'
// stores
import ActivityStore from '../../../stores/activityStore';

import ActivityItem from './ActivityItem';

const ActivityList = () => {
  const activityStore = useContext(ActivityStore);
  const { activitiesByDate } = activityStore;
  
  

  return (
    <div className="activity-list">
      {
        activitiesByDate.map(([group, activities]) => (
          <div className="activity-group">
          <p className="activity-group__month">{monthNames[parseInt(group) - 1]}</p>
          {
            activities.map(activity => (
              <ActivityItem key={activity.id} activity={activity} />
            ))
          }
          </div>
        ))
      }
    </div>
    
  )
}

export default observer(ActivityList)