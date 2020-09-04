import React, { useState, ChangeEvent, FormEvent } from 'react';
import TextField from '@material-ui/core/TextField';
import { IActivity } from '../../types/activities.types';

interface IProps {
  setEditMode: (editMode: boolean) => void;
  selectedActivity: IActivity | null;
  createActivity: (activity:IActivity) => void;
  editActivity: (activity:IActivity) => void;
}
const ActivityForm = ({
  setEditMode, 
  selectedActivity,
  createActivity,
  editActivity
}:IProps) => {

  const initializeForm = (): IActivity => {
    if (selectedActivity) {
      return selectedActivity
    } else {
      return {
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
      }
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (activity.id === '') {
      createActivity(activity)
    } else {
      editActivity(activity)
    }
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {value, name} = event.target;

    setActivity({...activity, [name]: value})
  }

  const [activity, setActivity ] = useState<IActivity>(initializeForm())
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="activity-form">
        <TextField 
          label="Title" 
          name="title"
          onChange={handleInputChange}
          value={activity.title}
          margin="normal" 
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField 
          multiline 
          label="Description" 
          name="description"
          onChange={handleInputChange}
          value={activity.description}
          margin="normal" 
          rows={2}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField 
          label="Category"
          name="category"
          onChange={handleInputChange} 
          value={activity.category}
          margin="normal" 
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField 
          id="date"
          label="Date"
          name="date"
          onChange={handleInputChange}
          value={activity.date}
          type="datetime-local"
          // defaultValue="2021-06-06"
          InputLabelProps={{
          shrink: true,
          }} 
          margin="normal" 
        />
        <TextField 
          label="City" 
          name="city"
          onChange={handleInputChange}
          value={activity.city}
          margin="normal" 
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField 
          label="Venue" 
          name="venue"
          onChange={handleInputChange}
          value={activity.venue}
          margin="normal" 
          InputLabelProps={{
            shrink: true,
          }}
        />
        <button className="activity-form__submit" type="submit">Submit</button>
        <button className="activity-form__cancel" onClick={() => setEditMode(false)}>Cancel</button>
      </form>
    </div>
  )
}

export default ActivityForm
