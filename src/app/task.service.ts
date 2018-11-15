import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Task} from "./model/task.model";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost/TaskManager';

  getTasks() {
    return this.http.get<Task[]>(this.baseUrl+'/api/GetTaskColection');
  }

  getTaskById(id: number) {
    return this.http.get<Task>(this.baseUrl + '/api/GetTaskyByID/' + id);
  }

  getParentTasks() {
    return this.http.get<Task[]>(this.baseUrl+'/api/GetParentTask');
  }

  createTask(task: Task) {
    return this.http.post(this.baseUrl+'/api/AddTask', task);
  }

  updateTask(task: Task) {
    return this.http.put(this.baseUrl +'/api/UpdateTask', task);
  }

  endTask(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }

}
