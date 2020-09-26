import React from 'react'
import TextField from '@material-ui/core/TextField';

import SendIcon from '@material-ui/icons/Send';

import ActivityMessage from './ActivityMessage';

const ActivityDetailsChat = () => {
  return (
    <div className="activity-details-chat" >
      <div className="activity-details-chat__header">
        <h2>Chat about this event</h2>
      </div>
      <div className="activity-details-chat__messages-section">
        <ActivityMessage userName="Michael" message="this rocks"/>
        <ActivityMessage userName="Clinton" message="I'm excited"/>
      </div>
      <form autoComplete="off">
        <TextField 
          multiline 
          label="Message" 
          name="message"
          margin="normal" 
          fullWidth={true}
          rows={4}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <button type="submit"><SendIcon/></button>
      </form>
    </div>
  )
}

export default ActivityDetailsChat
