import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  public student :any = [
    {
      name : "",
      age : "",
      gender : ""
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
