import { Injectable } from '@angular/core';
import { url } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
url=url.endPoints+"tasks/";
  constructor(private _http:HttpClient) { }
  getAllTasks(){
    return this._http.get<Task>(this.url);
  }
}
