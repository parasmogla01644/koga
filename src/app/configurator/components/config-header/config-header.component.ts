import { Component, OnInit } from '@angular/core';
import { HEADER_TABS } from '../../constants/headers.constants';
import { IHeaderTab } from '../../models/configurator.models';
import { StepperService } from '@service/stepper.service';

@Component({
  selector: 'app-config-header',
  templateUrl: './config-header.component.html',
  styleUrls: ['./config-header.component.scss'],
})
export class ConfigHeaderComponent implements OnInit {
  headerTab: IHeaderTab[] = HEADER_TABS;
  currentStepConfig: any;
  dropDownStatus: boolean = false;

  constructor(private readonly stepperService: StepperService) {}

  ngOnInit(): void {
    this.subsCurrentStep();
    this.subsCurrentStepConfig();
  }

  subsCurrentStep() {
    this.stepperService.currentStep.subscribe({
      next: (value) => {
        if (value) {
          this.headerTab.forEach((tab: any) => {
            tab.selected = value.id === tab.id;
          });
        }
      },
    });
  }

  languageToggle() {
    this.dropDownStatus = !this.dropDownStatus;
  }

  closeModal(event: any) {
    this.dropDownStatus = false;
  }

  selectTab(index: number) {
    this.stepperService.gotoTab(index);
    // this.headerTab.forEach((tab: IHeaderTab, i) => {
    //   if (i === index) {
    //     tab.selected = true;
    //   } else {
    //     tab.selected = false;
    //   }
    // });
    // this.stepperService.updateCurrentStep(this.headerTab?.[index]);
  }

  subsCurrentStepConfig() {
    this.stepperService.stepsConfig.subscribe((data: any) => {
      this.currentStepConfig = data;
    });
  }
}
