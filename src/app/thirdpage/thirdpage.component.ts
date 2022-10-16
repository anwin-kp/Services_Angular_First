import { Component, OnInit } from '@angular/core';
import { myservice } from '../service/info_service';
@Component({
  selector: 'app-thirdpage',
  templateUrl: './thirdpage.component.html',
  styleUrls: ['./thirdpage.component.css']
})
export class ThirdpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = "Anwin";
  btnclick() {
    const service = new myservice();
    service.btnclick(this.title);
  }
}
