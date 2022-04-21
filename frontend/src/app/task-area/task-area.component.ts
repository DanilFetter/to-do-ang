import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskLoaderService, Task } from '../task-loader.service';

@Component({
  selector: 'app-task-area',
  templateUrl: './task-area.component.html',
  styleUrls: ['./task-area.component.scss'],
})
export class TaskAreaComponent implements OnInit {
  displayedTasks: Task[] = [];
  currentTab: string = 'All';

  taskTextField = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
  ]);

  constructor(private readonly taskLoaderService: TaskLoaderService) {}

  ngOnInit(): void {
    this.displayedTasks = this.taskLoaderService.getItems();
  }

  checkTask(taskInformation: Task): void {
    this.displayedTasks = this.taskLoaderService.changeTaskStatus(
      taskInformation.id,
      taskInformation.status
    );
  }

  createTask(): void {
    const taskTextField = this.taskTextField.value;

    if (this.taskTextField.valid) {
      this.taskTextField.setValue('');
      this.displayedTasks = this.taskLoaderService.createNewTask(
        taskTextField,
        this.currentTab
      );
    }
  }

  deleteTask(id: string): void {
    this.displayedTasks = this.taskLoaderService.removeTask(id);
  }
}
