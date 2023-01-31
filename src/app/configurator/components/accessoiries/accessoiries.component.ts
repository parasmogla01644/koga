import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { StepperService } from '@service/stepper.service';
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
      expand: false,
    },
    {
      title: 'Lock',
      ref: 'lockRef',
      expand: false,
    },
    {
      title: 'Pump',
      ref: 'pumpRef',
      expand: false,
    },
    {
      title: 'Bottle & bottle holder',
      ref: 'bottleHolderRef',
      expand: false,
    },
    {
      title: 'USB Device',
      ref: 'usbDeviceRef',
      expand: false,
    },
    {
      title: 'Mudguards',
      ref: 'mudguardsRef',
      expand: false,
    },
    {
      title: 'Bosch options',
      ref: 'boschOptionsRef',
      expand: false,
    },
  ];
  openModal: boolean = false;
  AppCards: IAppCards[] = JSON.parse(JSON.stringify(AppCards));
  activeIds: string[] = ['0'];

  constructor(private readonly stepperService: StepperService, private cd: ChangeDetectorRef) {}

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
  toggleModal(event: any) {
    this.openModal = !this.openModal;
    event.stopPropagation();
  }

  closeModal() {
    this.openModal = false;
    this.cd.detectChanges();
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
