import { Component, OnInit } from '@angular/core';
import { StepperService } from '../../services/stepper.service';
import { IAppCards, IExpansionTabs } from '../../models/configurator.models';
import { AppCards } from '../../constants/cards.contants';

@Component({
  selector: 'app-carriers',
  templateUrl: './carriers.component.html',
  styleUrls: ['./carriers.component.scss'],
})
export class CarriersComponent implements OnInit {
  AppCards: IAppCards[] = AppCards;
  expansionList: IExpansionTabs[] = [
    {
      title: 'Carriers',
      ref: 'carriersRef',
      expand: true,
    },
    {
      title: 'Luggage',
      ref: 'luggageRef',
      expand: true,
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
