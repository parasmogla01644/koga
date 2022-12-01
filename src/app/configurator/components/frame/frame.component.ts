import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { StepperService } from '@service/stepper.service';
export interface IAppCards {
  isDisabled: boolean;
  caption: string;
  infoTitle: string;
  id: number;
  checked: boolean;
}

export interface Iframes {
  title: string;
  ref: any;
  expand: boolean;
}
@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss'],
})
export class FrameComponent implements OnInit {
  @ViewChild('framekleurRef') framekleurRef: any;
  @ViewChild('frametypeRef') frametypeRef: any;
  @ViewChild('vorkRef') vorkRef: any;
  openModal: boolean = false;
  color: any;

  frames: Iframes[] = [
    {
      title: 'Framekleur',
      ref: 'framekleurRef',
      expand: true,
    },
    {
      title: 'Frametype',
      ref: 'frametypeRef',
      expand: true,
    },
    {
      title: 'Vork',
      ref: 'vorkRef',
      expand: true,
    },
  ];

  AppCards: IAppCards[] = [
    {
      isDisabled: false,
      caption: 'Graphite black shiny',
      infoTitle: 'meest gekozen',
      checked: false,
      id: 1,
    },
    {
      isDisabled: false,
      caption: 'Graphite black shiny',
      infoTitle: '',
      checked: false,
      id: 2,
    },
    {
      isDisabled: false,
      caption: 'Graphite black shiny',
      infoTitle: 'meest gekozen',
      checked: false,
      id: 3,
    },
    {
      isDisabled: true,
      caption: 'Graphite black shiny',
      infoTitle: '',
      checked: false,
      id: 4,
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
