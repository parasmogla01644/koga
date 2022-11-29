import { Component, OnInit } from '@angular/core';
import { IHeaderTab } from './models/configurator.models';
import { StepperService } from './services/stepper.service';

@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.scss'],
})
export class ConfiguratorComponent implements OnInit {
  currentStep!: IHeaderTab;
  // openModal: boolean = false;

  constructor(private readonly stepperService: StepperService) {}

  ngOnInit(): void {
    this.subsCurrentSteps();
  }

  subsCurrentSteps() {
    this.stepperService.currentStep.subscribe((step: any) => {
      console.log(step);
      this.currentStep = step;
    });
  }

  // toggleModal() {
  //   this.openModal = !this.openModal;
  // }

  // closeModal() {
  //   this.openModal = false;
  // }
}
