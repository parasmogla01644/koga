import { Component, OnInit } from '@angular/core';
import { StepperService } from '../../services/stepper.service';
import { IAppCards, IExpansionTabs } from '../../models/configurator.models';
import { AppCards } from '../../constants/cards.contants';

@Component({
  selector: 'app-saddle',
  templateUrl: './saddle.component.html',
  styleUrls: ['./saddle.component.scss'],
})
export class SaddleComponent implements OnInit {
  AppCards: IAppCards[] = AppCards;
  expansionList: IExpansionTabs[] = [
    {
      title: 'Saddle',
      ref: 'saddleRef',
      expand: true,
    },
    {
      title: 'Seatpost',
      ref: 'seatpostRef',
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
