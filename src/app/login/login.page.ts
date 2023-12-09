import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }

  redirectToLogin() {
    this.router.navigate(['/login-real']);
  }

  redirectToRegister() {
    this.router.navigate(['/register']);
  }

  ngOnInit() {}
  
  swiperSlideChanged(e: any) {}
}
