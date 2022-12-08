import { Component, OnInit } from '@angular/core';
import { StepperService } from '@service/stepper.service';
import { IHeaderTab } from './models/configurator.models';

@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.scss'],
})
export class ConfiguratorComponent implements OnInit {
  currentStep!: IHeaderTab;
  viewToggle: boolean = false;
  // openModal: boolean = false;

  constructor(private readonly stepperService: StepperService) {}

  ngOnInit(): void {
    this.subsCurrentSteps();
  }

  subsCurrentSteps() {
    this.stepperService.currentStep.subscribe((step: any) => {
      this.currentStep = step;
    });
  }

  // toggleModal() {
  //   this.openModal = !this.openModal;
  // }

  // closeModal() {
  //   this.openModal = false;
  // }
  clickViewToggle(value: boolean): void {
    this.viewToggle = value;
  }
}
