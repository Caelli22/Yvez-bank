import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INITIAL_BALANCE, generateUUID, save_user } from '../core/bank';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  // public counter: number = 1; original  value
  public counter: number = 1;
  public popup: any = 'popupCard';
  public checkboxButton: any = true;
  public cbCounter: number = 0;
  public num1: string = '';
  public num2: string = '';
  public num3: string = '';
  public num4: string = '';
  public numCounter: number = 0;
  public numPlaceholder1: any = 'numPlaceholder';
  public numPlaceholder2: any = 'numPlaceholder';
  public numPlaceholder3: any = 'numPlaceholder';
  public numPlaceholder4: any = 'numPlaceholder';
  public hideLogo: any = '';
  public hideImg: any = 'phHide';
  public pin1: string = '';
  public pin2: string = '';

  nextPage() {
    setTimeout(() => {
      this.counter += 1;
    }, 300);
  }

  //14 counts sa indicator
  backButton() {
    this.counter -= 1;
    if (this.counter < 1) {
      this.counter += 1;
    }
  }

  inputPin() {
    if (this.num1 !== '') {
      this.numPlaceholder1 = 'phHide';
    } else {
      this.numPlaceholder1 = 'numPlaceholder';
    }
    if (this.num2 !== '') {
      this.numPlaceholder2 = 'phHide';
    } else {
      this.numPlaceholder2 = 'numPlaceholder';
    }
    if (this.num3 !== '') {
      this.numPlaceholder3 = 'phHide';
    } else {
      this.numPlaceholder3 = 'numPlaceholder';
    }
    if (this.num4 !== '') {
      this.numPlaceholder4 = 'phHide';
    } else {
      this.numPlaceholder4 = 'numPlaceholder';
    }
  }

  cardClick() {
    this.popup = 'popupCardshow';
  }
  cardHide() {
    this.popup = 'popupCard';
  }

  checked() {
    this.cbCounter += 1;
  }

  activateButton() {
    if (this.cbCounter >= 4) {
      this.checkboxButton = false;
    }
  }

  autoNext() {
    setTimeout(() => {
      this.counter += 1;
    }, 2000);
  }

  inputData(input: any) {
    const { contact_number, username } = input;

    if (username === '') {
      alert('Please input a value');
      this.counter = 11;
      return;
    }

    if (contact_number === '') {
      alert('Please input a value');
      this.counter = 3;
      return;
    }

    let savedUser = localStorage.getItem('userInfo');
    let storeUser = {};
    console.log(this.pin1);
    // // existing data on localStorage
    if (savedUser) {
      storeUser = { ...JSON.parse(savedUser), ...input };
    } else {
      storeUser = { ...input };
    }
    console.log(storeUser);
    localStorage.setItem('userInfo', JSON.stringify(storeUser));
    this.nextPage();
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
      return;
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

  confirmPin1() {
    // let stringPin = String(this.num1 + this.num2 + this.num3 + this.num4);
    let stringPin = `${this.num1}${this.num2}${this.num3}${this.num4}`;
    this.pin1 = stringPin;
    this.num1 = '';
    this.num2 = '';
    this.num3 = '';
    this.num4 = '';
    this.numPlaceholder1 = 'numPlaceholder';
    this.numPlaceholder2 = 'numPlaceholder';
    this.numPlaceholder3 = 'numPlaceholder';
    this.numPlaceholder4 = 'numPlaceholder';
    this.numCounter = 0;
    if (this.pin1 === '') {
      alert('Please input a value');
      this.counter = 12;
      return;
    }
    this.nextPage();
  }

  confirmPin2() {
    let stringPin = String(this.num1 + this.num2 + this.num3 + this.num4);
    this.pin2 = stringPin;

    if (this.pin2 === '') {
      alert('Please input a value');
      this.counter = 13;
      return;
    }

    if (this.pin1 == this.pin2) {
      let userInfo = localStorage.getItem('userInfo');
      if (userInfo) {
        let storeUser = { ...JSON.parse(userInfo) };
        storeUser = {
          ...storeUser,
          pin: this.pin2,
          balance: INITIAL_BALANCE,
          uuid: generateUUID(),
        };
        console.log(storeUser);
        save_user(storeUser);
        localStorage.removeItem('userInfo');
      }
      setTimeout(() => {
        this.counter += 1;
        this.hideLogo = 'phHide';
        this.hideImg = '';
      }, 300);

      // let userInfo = localStorage.getItem('userInfo');
      // if (userInfo) {
      //   let storeUser = { ...JSON.parse(userInfo) };
      //   storeUser = {
      //     ...storeUser,
      //     pin: this.pin2,
      //     balance: INITIAL_BALANCE,
      //     uuid: generateUUID(),
      //   };
      //   console.log(storeUser);
      //   save_user(storeUser);
      //   localStorage.removeItem('userInfo');
      // }
    } else {
      alert('Please input the same PIN. Try again');
      this.num1 = '';
      this.num2 = '';
      this.num3 = '';
      this.num4 = '';
      this.numPlaceholder1 = 'numPlaceholder';
      this.numPlaceholder2 = 'numPlaceholder';
      this.numPlaceholder3 = 'numPlaceholder';
      this.numPlaceholder4 = 'numPlaceholder';
      this.numCounter = 0;
      this.counter = 12;
    }
  }

  onNext(input: any) {
    console.log(input);
  }

  toLogin() {
    setTimeout(() => {
      this.router.navigate(['/login-real']);
    }, 500);
  }
}
