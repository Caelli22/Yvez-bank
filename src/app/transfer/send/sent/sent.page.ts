import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.page.html',
  styleUrls: ['./sent.page.scss'],
})
export class SentPage implements OnInit {
  
  constructor(private router: Router) { }

  backToSend() {
    this.router.navigate(['/transfer/send']);
  }

  itemClicked: boolean = false;

  toggleClickedItem() {

   this.itemClicked = !this.itemClicked;
   console.log(this.itemClicked)

  } 
  
  refNo = 21243;
  amTrans = 200000.00;
  amBal = 3000.00;


  ngOnInit() {
  }

}
