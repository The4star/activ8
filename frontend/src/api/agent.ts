import axios, { AxiosResponse } from 'axios';
import { IActivity } from '../types/activities.types';

axios.defaults.baseURL = 'http://localhost:5000/api'

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  delete: (url: string ) => axios.delete(url).then(responseBody)
}

const ActivitiesApi = {
  list: (): Promise<IActivity[]> => requests.get('/activities'),
  details: (activity: IActivity): Promise<IActivity> => requests.get(`/activities/${activity.id}`),
  create: (activity: IActivity): Promise<IActivity> => requests.post('/activities', activity),
  update: (activity: IActivity):Promise<IActivity> => requests.put(`/activities/${activity.id}`, activity),
  delete: (id: string ):Promise<{}> => requests.delete(`activities/${id}`)
}

export {
  ActivitiesApi
}