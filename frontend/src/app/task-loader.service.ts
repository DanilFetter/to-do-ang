import { Injectable } from '@angular/core';
import TaskInerface from './interface';
@Injectable({
  providedIn: 'root',
})
export class TaskLoaderService {
  private dataStore: TaskInerface[] = [
    { id: '1', text: 'Feed cat', status: false },
    { id: '1', text: 'Feed cat', status: true },
    { id: '1', text: 'Feed cat', status: false },
    { id: '1', text: 'Feed cat', status: true },
  ];

  getItems(): TaskInerface[] {
    return this.dataStore;
  }
}
