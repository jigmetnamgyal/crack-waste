import BaseHttpService from './base-http.service';

export default class TasksService extends BaseHttpService {
  createTask(title, description) {
    return this.post(`tasks`, { title, description });
  }
}
