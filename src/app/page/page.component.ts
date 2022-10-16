import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { myservice } from '../service/info_service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  title = "Anwin";
  // btnclick() {
  //   alert("Hello from " + this.title)

  // }
  btnclick() {
    const service = new myservice();
    service.btnclick(this.title);
  }
}
