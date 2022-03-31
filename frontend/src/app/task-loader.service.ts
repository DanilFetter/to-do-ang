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
    { id: '1', text: 'Feed cat', status: true, tabGroupe: 'College' },
    { id: '1', text: 'Feed cat', status: false, tabGroupe: 'Payments' },
  ];

  getItems(): TaskInterface[] {
    return this.dataStore;
  }
}
