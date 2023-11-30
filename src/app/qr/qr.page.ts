import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {

  constructor(private router: Router) { }

  backToMain() {
    this.router.navigate(['/main']);
  }

  ngOnInit() {
  }

}
