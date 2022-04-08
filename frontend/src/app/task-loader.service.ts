import { Injectable } from '@angular/core';

export interface TaskInterface {
  id: string;
  text: string;
  status: boolean;
  tabGroupe: string;
}

@Injectable({
  providedIn: 'root',
})
export class TaskLoaderService {
  private dataStore: TaskInterface[] = [
    { id: '1', text: 'Feed cat', status: false, tabGroupe: 'Uncategorized' },
    { id: '2', text: 'Feed cat', status: true, tabGroupe: 'College' },
    { id: '3', text: 'Feed cat', status: false, tabGroupe: 'Payments' },
  ];

  getItems(): TaskInterface[] {
    return this.dataStore;
  }

  changeTaskStatus(id: string, status: boolean) {
    const taskHolder = this.dataStore.find((elem) => elem.id === id);
    if (taskHolder) taskHolder.status = status;
    return this.dataStore;
  }

  createNewTask(text: string, tabGroupe: string) {
    if (text.trim()) {
      const newId = Date.now().toString();
      const newTaskHolder: TaskInterface = {
        id: newId,
        text: text,
        status: false,
        tabGroupe: tabGroupe,
      };
      this.dataStore.push(newTaskHolder);
    }
    return this.dataStore;
  }

  removeTask(id: string) {
    const rmTaskIndex = this.dataStore.findIndex((elem) => elem.id === id);
    this.dataStore.splice(rmTaskIndex, 1);
    return this.dataStore;
  }
}
