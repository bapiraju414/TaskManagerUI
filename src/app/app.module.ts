import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { UpdatetaskComponent } from './updatetask/updatetask.component';
import { ViewtaskComponent } from './viewtask/viewtask.component';
import {TaskService} from './task.service'

const routes: Routes = [
  {
    path: 'AddTask',
    component:AddTaskComponent,  
  },
  {
    path: 'UdateTask',
    component:UpdatetaskComponent,
  },
  {
    path: 'ViewTask',
    component:ViewtaskComponent,
  },
  {
    path: '',
    component:AddTaskComponent,
  }

];

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    UpdatetaskComponent,
    ViewtaskComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),   
    FormsModule,
    HttpClientModule
  
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
