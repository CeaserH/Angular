import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get('/cakes');
  }

  getOne(id){
    return this.http.get('/cakes/${id}');
  }

  create(data){
    return this.http.post('/cakes', data);
  }

  addReview(id, data){
    return this.http.put('/cakes/${id}', data);
  }
}