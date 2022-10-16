import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demopipes',
  templateUrl: './demopipes.component.html',
  styleUrls: ['./demopipes.component.css']
})
export class DemopipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = "Bangalore";
  today = Date();
  user={
    id:100,name:"Anwin",DOB:"10/05/1999",salary:999
  }
}
