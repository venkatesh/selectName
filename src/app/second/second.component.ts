import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  itemDetails:any={}
  constructor() { 
    console.log(JSON.parse(sessionStorage.getItem("selectedList")))
    let data=JSON.parse(sessionStorage.getItem("selectedList"));
    this.itemDetails=data;
  }

  ngOnInit() {
    console.log(this.itemDetails)
  }

}
