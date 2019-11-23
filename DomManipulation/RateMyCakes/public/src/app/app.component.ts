import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Rate My Cakes';

  newCake = {
    baker: "",
    img: "",
  };

  cakes = [];

  showCake = null;

  constructor(private httpService: HttpService){

  }

  ngOnInit(){
    this.allCakes();
  }

  createCake(){
    const observable = this.httpService.create(this.newCake)
    observable.subscribe((data) => {
      this.newCake = {
        baker: "",
        img: ""
      };
      this.allCakes();
    });
  }

  allCakes(){
    const observable = this.httpService.getAll();
    observable.subscribe((data: any) => {
      this.cakes = data;
    });
  }

  displayCake(cake){
    this.showCake = cake;
  }
}
