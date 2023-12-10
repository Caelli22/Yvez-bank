import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-real',
  templateUrl: './login-real.page.html',
  styleUrls: ['./login-real.page.scss'],
})
export class LoginRealPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  public counter: any = 1;
  public num1: string = '';
  public num2: string = '';
  public num3: string = '';
  public num4: string = '';
  public numCounter: number = 0;
  public bilogFill1: any = '';
  public bilogFill2: any = '';
  public bilogFill3: any = '';
  public bilogFill4: any = '';
  public pin2: any = '';

  Login() {
    setTimeout(() => {
      this.counter += 1;
    }, 300);
  }

  pinNumber(num: any) {
    if (this.numCounter == 0) {
      let subNum = num;
      this.num1 = subNum;
      this.numCounter += 1;
      return;
    }
    if (this.numCounter == 1) {
      let subNum2 = num;
      this.num2 = subNum2;
      this.numCounter += 1;
      return;
    }
    if (this.numCounter == 2) {
      let subNum3 = num;
      this.num3 = subNum3;
      this.numCounter += 1;
      return;
    }
    if (this.numCounter == 3) {
      let subNum4 = num;
      this.num4 = subNum4;
      this.numCounter += 1;
      let stringPin = String(this.num1 + this.num2 + this.num3 + this.num4);
      this.pin2 = stringPin;
      if (this.pin2 === '0000') {
        setTimeout(() => {
          this.router.navigate(['/main']);
        }, 500);
      } else {
        return;
      }
    }
  }
  inputPin() {
    if (this.num1 !== '') {
      this.bilogFill1 = 'bilogFill';
    } else {
      this.bilogFill1 = '';
    }
    if (this.num2 !== '') {
      this.bilogFill2 = 'bilogFill';
    } else {
      this.bilogFill2 = '';
    }
    if (this.num3 !== '') {
      this.bilogFill3 = 'bilogFill';
    } else {
      this.bilogFill3 = '';
    }
    if (this.num4 !== '') {
      this.bilogFill4 = 'bilogFill';
    } else {
      this.bilogFill4 = '';
    }
  }
  deletePin() {
    if (this.numCounter == 4) {
      this.num4 = '';
      this.numCounter -= 1;
      return;
    }
    if (this.numCounter == 3) {
      this.num3 = '';
      this.numCounter -= 1;
      return;
    }
    if (this.numCounter == 2) {
      this.num2 = '';
      this.numCounter -= 1;
      return;
    }
    if (this.numCounter == 1) {
      this.num1 = '';
      this.numCounter -= 1;
      return;
    }
  }
}
