import { Injectable } from '@angular/core';
import { IHeaderTab } from '../configurator/models/configurator.models';
import { BehaviorSubject } from 'rxjs';
import { HEADER_TABS } from '../configurator/constants/headers.constants';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class StepperService {
  currentStep: BehaviorSubject<any> = new BehaviorSubject(HEADER_TABS[0]);
  stepsConfig: BehaviorSubject<any> = new BehaviorSubject({});

  constructor(private readonly router: Router) {}

  updateCurrentStep(value: any) {
    this.currentStep.next(value);
  }

  gotoTab(index: number) {
    this.updateCurrentStep(HEADER_TABS?.[index]);
  }

  updateCurrentStepConfig(value: any) {
    let config = this.stepsConfig.value;
    this.stepsConfig.next({ ...config, ...value });
  }

  gotoNextStep() {
    let stepId = this.currentStep.value?.id;
    let index = HEADER_TABS.findIndex((tab: IHeaderTab) => {
      return tab?.id === stepId;
    });
    if (index === HEADER_TABS.length - 1) {
      this.gotoCart();
    } else if (index > -1) {
      this.currentStep.next({ ...HEADER_TABS[index + 1], disabled: false });
    } else {
      this.currentStep.next({ ...HEADER_TABS[0], disabled: false });
    }
  }

  previous() {
    let stepId = this.currentStep.value?.id;
    let index = HEADER_TABS.findIndex((tab: IHeaderTab) => {
      return tab?.id === stepId;
    });
    if (index > 0) {
      this.currentStep.next({ ...HEADER_TABS[index - 1], disabled: false });
    } else {
      this.currentStep.next(HEADER_TABS[0]);
    }
  }

  gotoCart() {
    this.router.navigate(['cart-details']);
  }
}
