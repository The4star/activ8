import React from 'react';
import TextField from '@material-ui/core/TextField';

const ActivityForm = () => {
  return (
    <div className="container">
      <form action="" className="activity-form">
        <TextField 
          label="Title" 
          margin="normal" 
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField 
          multiline 
          label="Description" 
          margin="normal" 
          rows={2}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField 
          label="Category" 
          margin="normal" 
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField 
          id="date"
          label="Date"
          type="date"
          defaultValue="2021-06-06"
          InputLabelProps={{
          shrink: true,
          }} 
          margin="normal" 
        />
        <TextField 
          label="City" 
          margin="normal" 
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField 
          label="Venue" 
          margin="normal" 
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
    </div>
  )
}

export default ActivityForm
