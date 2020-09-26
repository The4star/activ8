import React from 'react'
import spacetime from 'spacetime';
import { dayNames } from '../../../helpers/general'
interface IProps {
  message: string;
  userName: string;
}

const date = spacetime.now()
const day = date.day()

const ActivityMessage = ({message, userName}: IProps) => {
  console.log(day)
  return (
    <div className="activity-details-chat__message">
      <div className="activity-details-chat__user-image">
        <img src="/assets/img/user.png" alt="user"/>
      </div>
      <div className="activity-details-chat__message-details">
  <p><strong>{userName}</strong> - {dayNames[day - 1]}, {date.format("nice")}</p>
        <p>{message}</p>
        <button>Reply</button>
      </div>
    </div>
  )
}

export default ActivityMessage
 