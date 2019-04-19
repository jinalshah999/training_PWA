import { Component } from '@angular/core';
import { TaskService } from './task.service';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trainingpwa';
  taskArray:Task[]=[];
  public constructor(private _taskData:TaskService){
    this._taskData.getAllTasks().subscribe(
      (data:any)=>{
        this.taskArray=data;
      }
    );
  }
}
