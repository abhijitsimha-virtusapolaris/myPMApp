import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

   @Input() rating:number;
   @Input() productName:string;
   starWidth:number;
   @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.starWidth = this.rating * 145/5;
    console.log(this.starWidth);
  }

  onClick():void{
    this.ratingClicked.emit('The rating '+this.rating+' of '+ this.productName+' has been clicked ');
    
  }
}
