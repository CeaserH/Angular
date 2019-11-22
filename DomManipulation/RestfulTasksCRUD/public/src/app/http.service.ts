import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) {
    // this.getTasks();
   };

   getTasks(){
    //  let tempObservable = this._http.get('/tasks');
    //  tempObservable.subscribe(data => console.log("Eureka! We got our tasks!", data))
    return this._http.get('/tasks');
   };

   getOneTask(id){
     return this._http.get("/task/" + id);
   };

   updateTask(id, editTask){
     return this._http.put("/task/" + id, editTask);
   }

   deleteTask(id){
     return this._http.delete("/task/" + id);
   }

   addTask(newTask){
     return this._http.post("/tasks", newTask);
   }
}
