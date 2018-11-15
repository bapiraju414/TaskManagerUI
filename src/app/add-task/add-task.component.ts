import { Component, OnInit } from '@angular/core';
import {TaskService} from '../task.service';
import {Router} from "@angular/router";
import {Task} from "../model/task.model";
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
 
  Task = new Task();
  parenttasks:Task[];
  constructor(private router: Router,private taskService: TaskService) { }

  ngOnInit() {
    this.Task.Parent_ID = null;
    this.taskService.getParentTasks()
      .subscribe( data => {
        this.parenttasks = data;
      });

  }

  createTask() {
    this.taskService.createTask(this.Task)
      .subscribe( data => {
        this.router.navigate(['ViewTask']);
      });
  }

}
