import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export const BackButtonText = {
  checkout: 'Back to Overview',
  default: 'Terug naar configuratie',
};

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  buttonText: string = BackButtonText.default;
  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    this.buttonText =
      this.router.url === '/checkout'
        ? BackButtonText.checkout
        : BackButtonText.default;
  }

  gotoConfigurationPage() {
    const currentRoute: string = this.router.url;
    if (currentRoute === '/checkout') {
      this.router.navigate(['cart-details']);
    } else {
      this.router.navigate(['']);
    }
  }
}
