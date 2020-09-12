import React, { useState, ChangeEvent, FormEvent, useContext, useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { observer } from 'mobx-react-lite';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { IActivity } from '../../types/activities.types';
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';

// stores
import ActivityStore from '../../stores/activityStore';
import LayoutWithNav from '../layouts/LayoutWithNav';

interface DetailParams {
  id: string
}

const ActivityForm = ({history, match}:RouteComponentProps<DetailParams>) => {
  const activityStore = useContext(ActivityStore);
  const { selectedActivity, selectActivity, createActivity, editActivity, submitting, loadActivity } = activityStore;

  const [activity, setActivity ] = useState<IActivity>({
    id: '',
    title: '',
    category: '',
    description: '',
    date: '',
    city: '',
    venue: ''
  })
  
  useEffect(() => {
    
    if (match.params.id && activity.id.length === 0) {
      loadActivity(match.params.id).then(() => {
        if (selectedActivity) {
          setActivity(selectedActivity)
        }
     });
    }
    return () => {
      selectActivity(undefined)
    }
  }, [loadActivity, selectActivity, match.params.id, selectedActivity, activity, activity.id.length])
  
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (activity.id === '') {
      const createdActivity = await createActivity(activity)
      history.push(`/activities/${createdActivity}`)
    } else {
      await editActivity(activity)
      history.push(`/activities/${activity.id}`)
    }
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {value, name} = event.target;
    setActivity({...activity, [name]: value})
  }

  const handleSelectChange = (event: any) => {
    const {value, name} = event.target;
    setActivity({...activity, [name]: value})
  }

  
  
  return (
    <LayoutWithNav >
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
          <Select 
            label="Category"
            name="category"
            defaultValue="drinks"
            onChange={handleSelectChange} 
            value={activity.category} 
          >
            <MenuItem value="culture">culture</MenuItem>
            <MenuItem value="drinks">drinks</MenuItem>
            <MenuItem value="travel">travel</MenuItem>
            <MenuItem value="music">music</MenuItem>
            <MenuItem value="film">film</MenuItem>
          </Select>
          <TextField 
            id="date"
            label="Date"
            name="date"
            onChange={handleInputChange}
            value={activity.date}
            type="datetime-local"
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
          <div className="button-wrapper">
            <button className="activity-form__submit" type="submit">Submit</button>
            {submitting && <CircularProgress size={24} className="button-progress" />}
          </div>
          <button className="activity-form__cancel" onClick={() => selectedActivity !== undefined ? history.push(`/activities/${selectedActivity.id}`) : history.push('/activities')}>Cancel</button>
        </form>
      </div>
    </LayoutWithNav>
  )
}

export default withRouter(observer(ActivityForm));
