import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskLoaderService, TaskInterface } from '../task-loader.service';

@Component({
  selector: 'app-task-area',
  templateUrl: './task-area.component.html',
  styleUrls: ['./task-area.component.scss'],
})
export class TaskAreaComponent implements OnInit {
  constructor(private readonly taskLoaderService: TaskLoaderService) {}
  displayedTasks: TaskInterface[] = [];
  currenTab: string = 'All';

  taskText = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
  ]);

  ngOnInit(): void {
    this.displayedTasks = this.taskLoaderService.getItems();
  }

  checkTask(id: string, status: boolean) {
    this.displayedTasks = this.taskLoaderService.changeTaskStatus(id, status);
  }

  createTask() {
    const taskText = this.taskText.value;
    
    if (this.taskText.valid) {
      this.taskText.setValue('');
      this.displayedTasks = this.taskLoaderService.createNewTask(
        taskText,
        this.currenTab
      );
    }
  }

  deleteTask(id: string) {
    this.displayedTasks = this.taskLoaderService.removeTask(id);
  }
}
