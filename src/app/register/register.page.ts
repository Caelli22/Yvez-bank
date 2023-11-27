import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  constructor() {}

  ngOnInit() {}
  // public counter: number = 1; original  value
  public counter: number = 6;
  public popup: any = 'popupCard';
  public checkboxButton: any = true;
  public cbCounter: number = 0;

  nextPage() {
    this.counter += 1;
  }
  //14 counts sa indecator
  backButton() {
    this.counter -= 1;
    if (this.counter < 1) {
      this.counter += 1;
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
}
