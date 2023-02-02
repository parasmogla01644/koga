import { Component, OnInit, Input } from '@angular/core';
import { HEADER_TABS } from '@configurator/constants/headers.constants';
import { IHeaderTab } from '@configurator/models/configurator.models';
import { StepperService } from '@service/stepper.service';

@Component({
  selector: 'app-config-footer',
  templateUrl: './config-footer.component.html',
  styleUrls: ['./config-footer.component.scss'],
})
export class ConfigFooterComponent implements OnInit {
  steps: IHeaderTab[] = HEADER_TABS;
  currentStep!: IHeaderTab;
  currentStepConfig: any;
  @Input() openSaved: boolean=false;

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

  get nextStepText() {
    let index = HEADER_TABS.findIndex(
      (step) => step.id === this.currentStep.id
    );
    return HEADER_TABS?.length - 1 === index
      ? 'Checkout Cart'
      : ` ${index + 2} ${HEADER_TABS?.[index + 1]?.title}`;
  }

  get isDisabled() {
    return this.currentStepConfig?.[this.currentStep?.id];
  }
}
