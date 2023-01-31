import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
  openSideBar: boolean = false;

  constructor(private readonly stepperService: StepperService, private cd: ChangeDetectorRef) {}

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

  languageToggle(event: any) {
    this.dropDownStatus = !this.dropDownStatus;
    event.stopPropagation();
  }

  closeModal(event: any) {
    this.dropDownStatus = false;
    this.cd.detectChanges();
  }

  selectTab(index: number) {
    this.stepperService.gotoTab(index);
  }

  subsCurrentStepConfig() {
    this.stepperService.stepsConfig.subscribe((data: any) => {
      this.currentStepConfig = data;
    });
  }

  toggleSidebarMenu(){
    this.openSideBar = !this.openSideBar ;
  }
}
