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
  oneTaskComp = "";


  constructor(private _httpService: HttpService){
  };

  ngOnInit(){
    // this.getTasksFromService();
  };

  getTasksFromService(){
    // let observable = this._httpService.getTasks();
    // observable.subscribe(data => {

    //   console.log("Got our tasks!", data);
    //   this.tasks = data;
    // });
  };

  allTasksWithClick(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got our tasks!", data);
      this.tasks = data;
    });
  }

  oneTaskWithClick(_id){
    let observable = this._httpService.getOneTask(_id);
    observable.subscribe(data => {
      console.log("Got one task!", data);
      this.oneTask = data['description'];
      this.oneTaskComp = data['completed'];
      console.log(this.oneTask);
    });
  }
}
