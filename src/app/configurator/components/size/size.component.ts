import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { StepperService } from '@service/stepper.service';
import { IAppCards, IExpansionTabs } from '../../models/configurator.models';
import { AppCards } from '../../constants/cards.contants';

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.scss'],
})
export class SizeComponent implements OnInit {
  AppCards: IAppCards[] = JSON.parse(JSON.stringify(AppCards));
  activeIds: string[] = ['0'];
  expansionList: IExpansionTabs[] = [
    {
      title: 'Size',
      ref: 'sizeRef',
      expand: true,
    },
    {
      title: 'Signature',
      ref: 'signatureRef',
      expand: false,
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

  selectedSize(value: any) {
    this.updateCurrentStep(value);
  }

  selectedSignature(value: any) {
    this.updateCurrentStep(value);
  }

  updateCurrentStep(value: any) {
    let id: string = this.stepperService.currentStep.value?.id;
    let details: any = {};
    details[id] = {
      ...this.stepData,
      ...value,
    };
    this.stepperService.updateCurrentStepConfig(details);
  }

  get stepData() {
    let id = this.stepperService.currentStep.value?.id;
    return this.stepperService.stepsConfig.value?.[id];
  }
}
