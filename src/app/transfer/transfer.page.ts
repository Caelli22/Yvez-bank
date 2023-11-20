import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.page.html',
  styleUrls: ['./transfer.page.scss'],
})
export class TransferPage implements OnInit {

  public profile: Array<any> = [
    { name: "Elijah Joshua A. Dimaculangan",
      initials: "EJ",
      paymethod: "G-Xchange",
      date: "Nov 03, 2023"},

    { name: "Yasmine Grace C. Esguerra",
      initials: "YG",
      paymethod: "Yvez Bank",
      date: "Nov 05, 2023"},

    { name: "Kevin Matthew L. Palma",
      initials: "KM",
      paymethod: "AquaBank",
      date: "Nov 06, 2023"},

    { name: "Dave Bryan Ico", 
      initials: "DB",
      paymethod: "GoTyme",
      date: "Nov 07, 2023"},
      
    { name: "Yvez Santiago", 
      initials: "Yv",
      paymethod: "Maya",
      date: "Nov 08, 2023"}
  ];


  constructor() { }

  ngOnInit() {
  }

}
