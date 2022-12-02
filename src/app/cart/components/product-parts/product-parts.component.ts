import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HEADER_TABS_MAP } from '@configurator/constants/headers.constants';
import { StepperService } from '@service/stepper.service';

@Component({
  selector: 'app-product-parts',
  templateUrl: './product-parts.component.html',
  styleUrls: ['./product-parts.component.scss'],
})
export class ProductPartsComponent implements OnInit {
  tabs: any = HEADER_TABS_MAP;
  stepsDetails: any;
  constructor(private stepperService: StepperService, private router: Router) {}

  ngOnInit(): void {
    this.subscribeStepsConfig();
  }

  subscribeStepsConfig() {
    this.stepperService.stepsConfig.subscribe({
      next: (data: any) => {
        console.log(data);
        this.stepsDetails = data;
      },
    });
  }

  editTabDetails(index: number) {
    this.stepperService.gotoTab(index);
    this.router.navigate(['']);
  }

  get steps() {
    return Object.keys(this.stepsDetails);
  }
}
