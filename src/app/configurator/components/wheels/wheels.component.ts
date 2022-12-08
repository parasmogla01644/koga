import { Component, OnInit } from '@angular/core';
import { IAppCards, IExpansionTabs } from '../../models/configurator.models';
import { AppCards } from '../../constants/cards.contants';
import { StepperService } from '@service/stepper.service';

@Component({
  selector: 'app-wheels',
  templateUrl: './wheels.component.html',
  styleUrls: ['./wheels.component.scss'],
})
export class WheelsComponent implements OnInit {
  AppCards: IAppCards[] = JSON.parse(JSON.stringify(AppCards));
  activeIds: string[] = ['0'];
  openModal: boolean = false;
  expansionList: IExpansionTabs[] = [
    {
      title: 'Rims',
      ref: 'rimsRef',
      expand: true,
    },
    {
      title: 'Tires',
      ref: 'tiresRef',
      expand: false,
    },
  ];

  constructor(private readonly stepperService: StepperService) {}

  ngOnInit(): void {
    this.setData();
  }

  setData() {
    let id = this.stepperService.currentStep.value?.id;
    let savedData = this.stepperService.stepsConfig.value?.[id];
    this.AppCards = this.AppCards.map((item: any) => {
      if (item.id === savedData?.id) {
        return savedData;
      } else {
        return item;
      }
    });
  }

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
    if (card.isDisabled) {
      return;
    }
    card.checked = true;
    this.updateCurrentStep(card);
  }

  updateCurrentStep(value: any) {
    let id: string = this.stepperService.currentStep.value?.id;
    let data: any = {};
    data[id] = value;
    this.stepperService.updateCurrentStepConfig(data);
  }
}
