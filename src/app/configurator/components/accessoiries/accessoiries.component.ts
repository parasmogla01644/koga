import { Component, OnInit } from '@angular/core';
import { StepperService } from '../../services/stepper.service';
import { IAppCards, IExpansionTabs } from '../../models/configurator.models';
import { AppCards } from '../../constants/cards.contants';
@Component({
  selector: 'app-accessoiries',
  templateUrl: './accessoiries.component.html',
  styleUrls: ['./accessoiries.component.scss'],
})
export class AccessoiriesComponent implements OnInit {
  expansionList: IExpansionTabs[] = [
    {
      title: 'Pedals',
      ref: 'pedalsRef',
      expand: true,
    },
    {
      title: 'Kickstand',
      ref: 'kickstandRef',
      expand: true,
    },
    {
      title: 'Lock',
      ref: 'lockRef',
      expand: true,
    },
    {
      title: 'Pump',
      ref: 'pumpRef',
      expand: true,
    },
    {
      title: 'Bottle & bottle holder',
      ref: 'bottleHolderRef',
      expand: true,
    },
    {
      title: 'USB Device',
      ref: 'usbDeviceRef',
      expand: true,
    },
    {
      title: 'Mudguards',
      ref: 'mudguardsRef',
      expand: true,
    },
    {
      title: 'Bosch options',
      ref: 'boschOptionsRef',
      expand: true,
    },
  ];
  openModal: boolean = false;
  AppCards: IAppCards[] = AppCards;

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
