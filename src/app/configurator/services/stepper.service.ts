import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HEADER_TABS } from '../constants/headers.constants';

@Injectable({
  providedIn: 'root',
})
export class StepperService {
  currentStep: BehaviorSubject<any> = new BehaviorSubject(HEADER_TABS[0]);
  stepsConfig: BehaviorSubject<any> = new BehaviorSubject({});

  constructor() {}

  updateCurrentStep(value: any) {
    this.currentStep.next(value);
  }
}
