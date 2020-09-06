import {observable, action} from 'mobx';
import { createContext } from 'react';
import { IActivity } from '../types/activities.types';
import { ActivitiesApi } from '../api/agent'; 

class ActivityStore {
  @observable activities:IActivity[] = []
  @observable selectedActivity:IActivity | undefined;
  @observable editMode: boolean = false

  @action getActivities = async () => {
    this.activities = [];
    const activities = await ActivitiesApi.list();
    activities.forEach(activity => {
      activity.date = activity.date.split(".")[0]
      this.activities.push(activity);
    })
  }

  @action selectActivity = (id: string | undefined) => {
    const activity = this.activities.find(a => a.id === id)
    
    if(activity !== undefined) {
      this.selectedActivity = activity
      this.editMode = false

      setTimeout(() => {
        const activityDetails = document.querySelector('.activity-details');
        if (activityDetails) {
          activityDetails.scrollIntoView({behavior:"smooth", block: "center"})
        }
      }, 200);
    } else {
      this.selectedActivity = activity
      this.editMode = false
    }
  }

  @action setEditMode = (setting:boolean) => {
    this.editMode = setting;
  }

  @action openCreateForm = () => {
    this.editMode = true;
    this.selectedActivity = undefined;
  }
}

export default createContext(new ActivityStore());