import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { initialize_bank_database } from '../core/bank';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router: Router) {
    initialize_bank_database();
  }

  ionViewDidEnter() {
    setTimeout(() => {
      this.router.navigate(['/register']);
    }, 3000); // 3000 milliseconds (3 seconds), adjust as needed
  }
}
