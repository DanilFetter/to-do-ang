import { Component, OnInit } from '@angular/core';
import TaskInterface from '../interface';
import { TaskLoaderService } from '../task-loader.service';
@Component({
  selector: 'app-task-area',
  templateUrl: './task-area.component.html',
  styleUrls: ['./task-area.component.scss'],
})
export class TaskAreaComponent implements OnInit {
  DisplayedTask: TaskInterface[] = [];
  constructor(private readonly taskLoaderService: TaskLoaderService) {}

  ngOnInit(): void {
    this.DisplayedTask = this.taskLoaderService.getItems();
  }
}
