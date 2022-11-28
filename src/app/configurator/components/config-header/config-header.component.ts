import { Component, OnInit } from '@angular/core';
import { HEADER_TABS } from '../../constants/headers.constants';
import { IHeaderTab } from '../../models/configurator.models';
import { StepperService } from '../../services/stepper.service';

@Component({
  selector: 'app-config-header',
  templateUrl: './config-header.component.html',
  styleUrls: ['./config-header.component.scss'],
})
export class ConfigHeaderComponent implements OnInit {
  headerTab: IHeaderTab[] = HEADER_TABS;
  dropDownStatus: boolean = false;

  constructor(private readonly stepperService: StepperService) {}

  ngOnInit(): void {}

  languageToggle() {
    this.dropDownStatus = !this.dropDownStatus;
  }

  closeModal(event: any) {
    this.dropDownStatus = false;
  }

  selectTab(index: number) {
    this.headerTab.forEach((tab: IHeaderTab, i) => {
      if (i === index) {
        tab.selected = true;
      } else {
        tab.selected = false;
      }
    });
    this.stepperService.updateCurrentStep(this.headerTab?.[index]);
  }
}
