import { Component, HostListener, OnInit } from '@angular/core';
import { StepperService } from '@service/stepper.service';
import { Observable } from 'rxjs';
import { IHeaderTab } from './models/configurator.models';

@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.scss'],
})
export class ConfiguratorComponent implements OnInit {
  currentStep!: IHeaderTab;
  viewToggle: boolean = false;
  deactivateMessage: string = 'You are about to exit your design. Be sure to save your configuration.';

  constructor(private readonly stepperService: StepperService) {}

  @HostListener('window:beforeunload')
  canDeactivate(): Observable<boolean> | boolean {
      return false;
  }
  
  ngOnInit(): void {
    this.subsCurrentSteps();
  }

  subsCurrentSteps() {
    this.stepperService.currentStep.subscribe((step: any) => {
      this.currentStep = step;
    });
  }
  clickViewToggle(value: boolean): void {
    this.viewToggle = value;
  }
}
