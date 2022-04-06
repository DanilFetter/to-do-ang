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
  currenTab:string = "All";

  ngOnInit(): void {
    this.displayedTasks = this.taskLoaderService.getItems();
  }

  checkTask(id:string,status:boolean){
    this.displayedTasks = this.taskLoaderService.changeTaskStatus(id,status)
  }

  createTask(event:KeyboardEvent){
    if(event.key==="Enter"){
      const target = event.target as HTMLInputElement;
      this.displayedTasks = this.taskLoaderService.createNewTask(target.value,this.currenTab)
      target.value = "" 
    }
  }

  deleteTask(id:string){
  this.displayedTasks = this.taskLoaderService.removeTask(id);
  }
}
