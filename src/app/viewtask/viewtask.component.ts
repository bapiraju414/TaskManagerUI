import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Router} from "@angular/router";
import {TaskService} from '../task.service';
import {Task} from "../model/task.model";



@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.css']
})
export class ViewtaskComponent  {

  tasks:Task[];
  constructor(private router: Router, private taskService: TaskService) { }
  
  ngOnInit() {
    this.taskService.getTasks()
      .subscribe( data => {
        this.tasks = data;
      });   
  }

  editTask(task: Task): void {
    localStorage.removeItem("editTaskid");
    localStorage.setItem("editTaskid", task.TaskId.toString());
    this.router.navigate(['UdateTask']);
  };



}
