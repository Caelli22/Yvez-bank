import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  ionViewDidEnter() {
    setTimeout(() => {
      this.router.navigate(['/register']); // replace 'main' with the actual route you want to navigate to
    }, 3000); // 3000 milliseconds (3 seconds), adjust as needed
  }

}
