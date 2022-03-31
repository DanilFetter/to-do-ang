import { Component, OnInit } from '@angular/core';
import { TaskLoaderService, TaskInterface } from '../task-loader.service';
@Component({
  selector: 'app-task-area',
  templateUrl: './task-area.component.html',
  styleUrls: ['./task-area.component.scss'],
})
export class TaskAreaComponent implements OnInit {
  constructor(private readonly taskLoaderService: TaskLoaderService) { }
  displayedTasks: TaskInterface[] = [];

  ngOnInit(): void {
    this.displayedTasks = this.taskLoaderService.getItems();
  }
}
