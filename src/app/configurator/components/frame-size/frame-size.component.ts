import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StepperService } from '@service/stepper.service';

@Component({
  selector: 'app-frame-size',
  templateUrl: './frame-size.component.html',
  styleUrls: ['./frame-size.component.scss'],
})
export class FrameSizeComponent implements OnInit {
  sizeConfig = [
    {
      id: 'size01',
      value: 50,
      unit: 'cm',
    },
    {
      id: 'size02',
      value: 54,
      unit: 'cm',
    },
    {
      id: 'size03',
      value: 57,
      unit: 'cm',
    },
    {
      id: 'size04',
      value: 60,
      unit: 'cm',
    },
    {
      id: 'size05',
      value: 63,
      unit: 'cm',
    },
  ];
  @Output() selectedSize: EventEmitter<any> = new EventEmitter();

  constructor(private readonly stepperService: StepperService) {}

  ngOnInit(): void {
    this.setData();
  }

  selectSize(size: any) {
    this.selectedSize.emit({ size: size });
  }

  setData() {
    let id = this.stepperService.currentStep.value?.id;
    let savedData = this.stepperService.stepsConfig.value?.[id];
    let savedSize = savedData?.size;
    this.sizeConfig = this.sizeConfig.map((sign: any) => {
      if (sign?.id === savedSize?.id) {
        return savedSize;
      } else {
        return sign;
      }
    });
  }
}
