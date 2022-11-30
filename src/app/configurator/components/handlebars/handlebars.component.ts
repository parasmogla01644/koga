import { Component, OnInit } from '@angular/core';
import { StepperService } from '../../services/stepper.service';
import { IAppCards, IExpansionTabs } from '../../models/configurator.models';
import { AppCards } from '../../constants/cards.contants';

@Component({
  selector: 'app-handlebars',
  templateUrl: './handlebars.component.html',
  styleUrls: ['./handlebars.component.scss'],
})
export class HandlebarsComponent implements OnInit {
  AppCards: IAppCards[] = AppCards;
  expansionList: IExpansionTabs[] = [
    {
      title: 'Bar',
      ref: 'barRef',
      expand: true,
    },
    {
      title: 'Stem',
      ref: 'stemRef',
      expand: false,
    },
    {
      title: 'Grips',
      ref: 'gripsRef',
      expand: false,
    },
  ];

  openModal: boolean = false;
  constructor(private readonly stepperService: StepperService) {}

  ngOnInit(): void {}

  handleChange(event: any) {
    console.log(event);
  }
  toggleModal() {
    this.openModal = !this.openModal;
  }

  closeModal() {
    this.openModal = false;
  }

  selectCard(card: any) {
    console.log(card);
    this.updateCurrentStep(card);
  }

  updateCurrentStep(value: any) {
    let id: string = this.stepperService.currentStep.value?.id;
    let data: any = {};
    data[id] = value;
    this.stepperService.updateCurrentStepConfig(data);
  }
}
