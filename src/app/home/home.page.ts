import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  @HostListener('document:click', ['$event'])
  handleClick(event: MouseEvent): void {
    // Navigate to the next page when the document is clicked
    this.router.navigate(['/main']);
  }
}
