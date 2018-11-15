import { Component, OnInit } from '@angular/core';
import {TaskService} from '../task.service';
import {Router} from "@angular/router";
import {Task} from "../model/task.model";

@Component({
  selector: 'app-updatetask',
  templateUrl: './updatetask.component.html',
  styleUrls: ['./updatetask.component.css']
})
export class UpdatetaskComponent implements OnInit {
  Task = new Task();
  parenttasks:Task[];
  constructor(private router: Router,private taskService: TaskService) { }


  ngOnInit() {

    let taskId = localStorage.getItem("editTaskid");
    if(!taskId) {
      alert("Invalid action.")
      this.router.navigate(['ViewTask']);
      return;  
     }
     else
     {
        this.taskService.getParentTasks()
        .subscribe( data => {
          this.parenttasks = data;
        });

        this.taskService.getTaskById(parseInt(taskId))
        .subscribe( data => {
          this.Task = data;          
        });
  
     }

  }

  updateTask() {
    this.taskService.updateTask(this.Task)
      .subscribe( data => {
        this.router.navigate(['ViewTask']);
      });
  }

}
