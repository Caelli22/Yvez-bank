import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})

export class MainPage implements OnInit {

  constructor(private router: Router) { }

  redirectToDepositPage() {
    // Assuming 'transfer' is the route for the transfer page
    this.router.navigate(['/deposit']);
  }

  redirectToTransferPage() {
    // Assuming 'transfer' is the route for the transfer page
    this.router.navigate(['/transfer']);
  }

  redirectToQrPage() {
    // Assuming 'transfer' is the route for the transfer page
    this.router.navigate(['/qr']);
  }


  ngOnInit() {
  }

}
