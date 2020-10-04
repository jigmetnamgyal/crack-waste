import { observable, action } from 'mobx';

export default class TasksStore {
  @observable location = [];

  constructor(tasksService) {
    this.tasksService = tasksService;
  }

  @action
  async createTask(location) {
    const result = await this.tasksService.createTask(location);

    if (result) {
      this.tasks.push(result.data);
    }
  }
}
