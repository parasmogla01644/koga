import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StepperService } from '@service/stepper.service';
import { ISelect } from '@shared/components/select/select.component';
export interface IAppCards {
  isDisabled: boolean;
  caption: string;
  infoTitle: string;
  id: number;
  checked: boolean;
  showColorOptions?: boolean;
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
  activeIds: string[] = ['0'];

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
      showColorOptions: true,
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
  colorFormGroup!: FormGroup;
  colorOptions: ISelect[] = [
    {
      title: 'Red',
      value: 'red',
    },
    {
      title: 'Graphite black shiny',
      value: 'graphite_black_shiny',
    },
    {
      title: 'Black shiny',
      value: 'black_shiny',
    },
    {
      title: 'Black',
      value: 'black',
    },
  ];

  selectedFrame: any;

  constructor(
    private readonly stepperService: StepperService,
    private _fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.setData();
  }

  initForm() {
    this.colorFormGroup = this._fb.group({
      frameColor: [''],
    });
  }

  setData() {
    let id = this.stepperService.currentStep.value?.id;
    let savedData = this.stepperService.stepsConfig.value?.[id];
    this.AppCards = this.AppCards.map((item: any) => {
      if (item.id === savedData?.id) {
        this.selectedFrame = savedData;
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
    this.selectedFrame = card;
    this.updateCurrentStep(card);
  }

  updateCurrentStep(value: any) {
    let id: string = this.stepperService.currentStep.value?.id;
    let data: any = {};
    data[id] = value;
    this.stepperService.updateCurrentStepConfig(data);
  }
}
