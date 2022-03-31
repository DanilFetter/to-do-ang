import { Component, OnInit } from '@angular/core';
import { TaskLoaderService, TaskInterface } from '../task-loader.service';
@Component({
  selector: 'app-task-area',
  templateUrl: './task-area.component.html',
  styleUrls: ['./task-area.component.scss'],
})

export class TaskAreaComponent implements OnInit {
  displayedTask: TaskInterface[] = [];
  constructor(private readonly taskLoaderService: TaskLoaderService) {}
  ngOnInit(): void {
    this.displayedTask = this.taskLoaderService.getItems();
  }
}
