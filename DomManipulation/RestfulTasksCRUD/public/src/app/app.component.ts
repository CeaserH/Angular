import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Restful Tasks API';
  tasks = [];
  oneTask = [];
  newTask: any;
  editTask: any;


  constructor(private _httpService: HttpService){
  };

  ngOnInit(){
    this.getTasksFromService();
    this.newTask = { title: "", description: "" };
  };

  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {

      console.log("Got our tasks!", data);
      this.tasks = data;
    });
  };

  // allTasksWithClick(){
  //   let observable = this._httpService.getTasks();
  //   observable.subscribe(data => {
  //     console.log("Got our tasks!", data);
  //     this.tasks = data;
  //   });
  // }

  oneTaskWithClick(_id){
    let observable = this._httpService.getOneTask(_id);
    observable.subscribe(data => {
      console.log("Got one task!", data);
      this.oneTask = data['description'];
      console.log(this.oneTask);
    });
  }

  onNewTaskSubmit(){
    let observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data => {
      console.log("Successfully added task!", data);
      this.getTasksFromService();
      this.newTask = { title: "", description: ""};
    });
  };

  deleteTask(_id){
    let observable = this._httpService.deleteTask(_id);
    observable.subscribe( data => {
      console.log("Task has been deleted!", data);
      this.getTasksFromService();
    });
  };

  editOneTask(task){
    this.editTask = { _id: task._id, title: task.title, description: task.description };
  };

  onEditSubmit(){
    let observable = this._httpService.updateTask(this.editTask._id, this.editTask);
    observable.subscribe( data => {
      console.log("Task has been updated!", data);
      this.getTasksFromService();
      this.editTask = null;
    })
  }
}
