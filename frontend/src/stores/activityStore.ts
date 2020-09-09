import {observable, action, computed, configure, runInAction } from 'mobx';
import { createContext, SyntheticEvent } from 'react';
import { IActivity } from '../types/activities.types';
import { ActivitiesApi } from '../api/agent'; 
import { v4 as uuid } from 'uuid';

configure({enforceActions: 'always'})
class ActivityStore {
  @observable activities:IActivity[] = []
  @observable selectedActivity:IActivity | undefined;
  @observable editMode: boolean = false;
  @observable submitting: boolean = false;
  @observable buttonTarget: string = "";

  @computed get activitiesByDate() {
    return this.activities.sort((a, b) => Date.parse(a.date) - Date.parse(b.date))
  }

  @action getActivities = async () => {
    try {
      const activities = await ActivitiesApi.list();
      runInAction('loading activities', () => {
        const allActivities: IActivity[] = [];
        activities.forEach(activity => {
          activity.date = activity.date.split(".")[0]
          allActivities.push(activity);
        })
        this.activities = allActivities
      })
    } catch (error) {
      console.log(error);
    }
    
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

  @action createActivity = async (activity: IActivity) => {
    try {
      this.submitting = true;
      activity.id = uuid()
      await ActivitiesApi.create(activity);
      await runInAction('Getting updated activities', async () => {
        await this.getActivities();
      })
      
      runInAction('resetting state', () => {
        this.selectActivity(activity.id);
        this.editMode = false;      
        this.submitting = false;
      })
    
    } catch (error) {
      console.log(error)
    }
  }

  @action editActivity = async (activity:IActivity) => {
    try {
      this.submitting = true;
      await ActivitiesApi.update(activity)

      await runInAction('Getting updated activities', async () => {
        await this.getActivities();
      })
      
      runInAction('resetting state', () => {
        this.selectActivity(activity.id);
        this.editMode = false;      
        this.submitting = false;
      })
    } catch (error) {
      runInAction(() => {
        this.submitting = false;
      })
      console.log(error)
    }
  }

  @action deleteActivity = async (e: SyntheticEvent<HTMLButtonElement>, activityId: string) => {
    try {
      this.submitting = true;
      this.buttonTarget = e.currentTarget.name;
      await ActivitiesApi.delete(activityId);
      await runInAction('Getting updated activities', async () => {
        await this.getActivities();
      })
      
      runInAction('resetting state', () => {
        this.selectActivity(undefined);
        this.editMode = false;      
        this.submitting = false;
      })
    } catch (error) {
      runInAction(() => {
        this.submitting = false;
      })
      console.log(error)
    }
    
  } 
}

export default createContext(new ActivityStore());