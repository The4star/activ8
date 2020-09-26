import React from 'react'
import { observer } from 'mobx-react-lite'
interface IProps {
  userName: string;
  following?: boolean;
  host?: boolean;
}
const Attendee = ({ userName, following, host }: IProps) => {
  return (
    <div className="activity-details-sidebar__attendee">
      <div className="activity-details-sidebar__image">
        <img src="/assets/img/user.png" alt="user"/>
      </div>
      <div className="activity-details-sidebar__attendee-details">
        <p><strong>{userName}</strong></p>
        {
          following &&
          <div className="activity-details-sidebar__following">
            <p>Following</p>
          </div>
        }
      </div>
      {
          host &&
          <div className="activity-details-sidebar__host">
            <p>Host</p>
          </div>
        }
    </div>
  )
}

export default observer(Attendee)
