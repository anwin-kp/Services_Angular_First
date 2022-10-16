import { Component, OnInit } from '@angular/core';
import { myservice } from '../service/info_service';
@Component({
  selector: 'app-secpage',
  templateUrl: './secpage.component.html',
  styleUrls: ['./secpage.component.css']
})
export class SecpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = "Anwin";
  btnclick() {
    const service = new myservice();
    service.btnclick(this.title);
  }
}
