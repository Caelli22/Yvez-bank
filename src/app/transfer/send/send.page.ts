import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-send',
  templateUrl: './send.page.html',
  styleUrls: ['./send.page.scss'],
})
export class SendPage implements OnInit {

  constructor(private router: Router) { }

  backtoTrans(){
    this.router.navigate(['/transfer'])
  }
  
  gotoSent(){
    this.router.navigate(['transfer/send/sent'])
  }

  ngOnInit() {
  }

}
