import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';

export interface TaskInterface {
  id: string;
  text: string;
  status: boolean;
  tabGroup: string;
}

@Injectable({
  providedIn: 'root',
})
export class TaskLoaderService {
  private dataStore: TaskInterface[] = [
    { id: '1', text: 'Feed cat', status: false, tabGroup: 'Uncategorized' },
    { id: '2', text: 'Feed cat', status: true, tabGroup: 'College' },
    { id: '3', text: 'Feed cat', status: false, tabGroup: 'Payments' },
  ];

  getItems(): TaskInterface[] {
    return this.dataStore;
  }

  changeTaskStatus(id: string, status: boolean) {
    const taskHolder = this.dataStore.find((elem) => elem.id === id);
    if (taskHolder) taskHolder.status = status;
    return this.dataStore;
  }

  createNewTask(text: string, tabGroup: string) {
    if (text.trim()) {
      const newTaskHolder: TaskInterface = {
        id: UUID.UUID(),
        text: text,
        status: false,
        tabGroup: tabGroup,
      };
      this.dataStore.push(newTaskHolder);
    }
    return this.dataStore;
  }

  removeTask(id: string) {
    this.dataStore = this.dataStore.filter((elem) => elem.id !== id);
    return this.dataStore;
  }
}
