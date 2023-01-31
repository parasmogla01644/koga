import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { StepperService } from '@service/stepper.service';
import { IAppCards, IExpansionTabs } from '../../models/configurator.models';
import { AppCards } from '../../constants/cards.contants';

@Component({
  selector: 'app-saddle',
  templateUrl: './saddle.component.html',
  styleUrls: ['./saddle.component.scss'],
})
export class SaddleComponent implements OnInit {
  AppCards: IAppCards[] = JSON.parse(JSON.stringify(AppCards));
  activeIds: string[] = ['0'];
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
  toggleModal( event: any ) {
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
