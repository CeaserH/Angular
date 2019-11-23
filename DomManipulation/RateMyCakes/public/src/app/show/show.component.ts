import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  
  @Input() oneCake;

  constructor() { }

  ngOnInit() {
    console.log(this.oneCake)
  }

}
