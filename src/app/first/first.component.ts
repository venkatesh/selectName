import { Component, OnInit, OnDestroy } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  dataObj:any=[
    {"car":"Volvo", "id":1, "name":"ravi", "age":34},
    {"car":"SUzuki", "id":2, "name":"satya"},
    {"car":"KIA", "id":3},
    {"car":"Honda", "id":4},
    {"car":"Benz", "id":5}
  ]
  filtered:any={};
  // item:any={}
  optionSelected:any={};
  constructor(public _route:Router){
    let data=JSON.parse(sessionStorage.getItem("selectedList"))
    if(data!=null || data !=undefined){
      this.optionSelected=data.car
    }
    
  }

  ngOnInit(){}

  onOptionsSelected(){
    this.filtered = this.dataObj.filter(t=>t.car ==this.optionSelected);
    sessionStorage.setItem("selectedList", JSON.stringify(this.filtered[0]))
    console.log(JSON.parse(sessionStorage.getItem("selectedList")))
  }

  navPage(){
this._route.navigateByUrl("second")
  }

}
