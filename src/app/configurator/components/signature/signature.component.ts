import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HEADER_TABS_MAP } from '@configurator/constants/headers.constants';
import { StepperService } from '@service/stepper.service';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.scss'],
})
export class SignatureComponent implements OnInit {
  signatureConfig: any[] = [
    {
      img: 'assets/images/futura.svg',
      name: 'futura',
      id: 'signature01',
      checked: false,
    },
    {
      img: 'assets/images/handwriting.svg',
      name: 'handwriting',
      id: 'signature02',
      checked: false,
    },
    {
      img: 'assets/images/silverbullet.svg',
      name: 'silverbullet',
      id: 'signature03',
      checked: false,
    },
    {
      name: 'futura',
      id: 'signature04',
      label: "I don't want a Signature on my frame",
      checked: false,
    },
  ];
  @Output() selectedSignature: EventEmitter<any> = new EventEmitter<any>();

  constructor(private readonly stepperService: StepperService) {}

  ngOnInit(): void {
    this.setData();
  }

  select(signature: any) {
    if (signature?.isDisabled) {
      return;
    }
    this.signatureConfig.forEach((sign: any) => {
      sign.checked = false;
    });

    signature.checked = true;
    this.selectedSignature.emit({ signature: signature });
  }

  setData() {
    let id = this.stepperService.currentStep.value?.id;
    let savedData = this.stepperService.stepsConfig.value?.[id];
    let savedSign = savedData?.signature;
    this.signatureConfig = this.signatureConfig.map((sign: any) => {
      if (sign?.id === savedSign?.id) {
        return savedSign;
      } else {
        return sign;
      }
    });
  }
}
