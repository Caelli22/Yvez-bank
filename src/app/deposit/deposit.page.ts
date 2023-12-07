import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.page.html',
  styleUrls: ['./deposit.page.scss'],
})
export class DepositPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToMain() {
    this.router.navigate(['/main']);
  }

}
