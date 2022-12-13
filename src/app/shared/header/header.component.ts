import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private readonly router: Router) {}

  ngOnInit(): void {}

  gotoConfigurationPage() {
    const currentRoute: string = this.router.url;
    if (currentRoute === '/checkout') {
      this.router.navigate(['cart-details']);
    } else {
      this.router.navigate(['']);
    }
  }
}
