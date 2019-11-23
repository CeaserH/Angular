import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})
export class CakeComponent implements OnInit {

  constructor(
    private http: HttpService
  ) { }

  @Input() oneCake: any;

  newReview = {
    rating: 5,
    desc: ''
  };


  ngOnInit() {
  }

  createReview() {
    const observable = this.http.addReview(this.oneCake._id, this.newReview);
    observable.subscribe((data: any) => {
      this.newReview = {
        rating: 5,
        desc: ''
      }
    });
  }

}
