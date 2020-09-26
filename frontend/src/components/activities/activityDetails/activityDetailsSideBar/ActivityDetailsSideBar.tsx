import React from 'react'
import Attendee from './Attendee'

const ActivityDetailsSideBar = () => {
  return (
    <div className="activity-details-sidebar">
      <div className="activity-details-sidebar__header">
        <h2>3 people going</h2>
      </div>
      <Attendee userName="Clinton" host={true} />
      <Attendee userName="John" following={true}/>
      <Attendee userName="Gavin" following={true}/>
    </div>
  )
}

export default ActivityDetailsSideBar
