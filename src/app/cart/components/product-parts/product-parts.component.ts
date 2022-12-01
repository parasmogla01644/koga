import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StepperService } from '@service/stepper.service';

@Component({
  selector: 'app-product-parts',
  templateUrl: './product-parts.component.html',
  styleUrls: ['./product-parts.component.scss'],
})
export class ProductPartsComponent implements OnInit {
  constructor(private stepperService: StepperService, private router: Router) {}

  ngOnInit(): void {}

  editTabDetails() {
    this.stepperService.gotoTab(2);
    this.router.navigate(['']);
  }
}
