import React from 'react'
import { observer } from 'mobx-react-lite';
import { IActivity } from '../../../types/activities.types'
import spacetime from 'spacetime';

//icons
import InfoIcon from '@material-ui/icons/Info';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import RoomIcon from '@material-ui/icons/Room';
interface IProps {
  activity: IActivity;
}

const ActivityDetailsInfo = ({ activity }: IProps) => {
  return (
    <div className="activity-details-info">
      <div className="activity-details-info__section">
        <InfoIcon />
        <p>{activity.description}</p>
      </div>
      <div className="activity-details-info__section">
        <CalendarTodayIcon />
        <p>{spacetime(activity.date).format("nice")}</p>
      </div>
      <div className="activity-details-info__section">
        <RoomIcon />
        <p>{activity.venue}</p>
      </div>
    </div>
  )
}

export default observer(ActivityDetailsInfo)
