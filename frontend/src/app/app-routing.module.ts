import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskAreaComponent } from './task-area/task-area.component';

const routes: Routes = [
  {path: "**", component: TaskAreaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
