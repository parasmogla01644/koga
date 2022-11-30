import { Component, OnInit } from '@angular/core';
import { StepperService } from '../../services/stepper.service';
import { IHeaderTab } from '../../models/configurator.models';

@Component({
  selector: 'app-config-footer',
  templateUrl: './config-footer.component.html',
  styleUrls: ['./config-footer.component.scss'],
})
export class ConfigFooterComponent implements OnInit {
  currentStep!: IHeaderTab;
  currentStepConfig: any;

  constructor(private readonly stepperService: StepperService) {}

  ngOnInit(): void {
    this.subsCurrentStep();
    this.subsCurrentStepConfig();
  }

  gotoNext() {
    this.stepperService.gotoNextStep();
  }

  gotoPrevious() {
    this.stepperService.previous();
  }

  subsCurrentStep() {
    this.stepperService.currentStep.subscribe((step: any) => {
      this.currentStep = step;
    });
  }

  subsCurrentStepConfig() {
    this.stepperService.stepsConfig.subscribe((data: any) => {
      this.currentStepConfig = data;
    });
  }

  get isDisabled() {
    return this.currentStepConfig?.[this.currentStep?.id];
  }
}
