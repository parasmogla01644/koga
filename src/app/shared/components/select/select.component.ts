import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

export interface ISelect {
  title: string;
  value: string | number;
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  @Input() label: string = 'Country';
  @Input() default: string = 'Open this select menu';
  @Input() fgroup!: FormGroup;
  @Input() controlName!: string;
  @Input() options: ISelect[] = [
    {
      title: 'UK',
      value: 'UK',
    },
    {
      title: 'US',
      value: 'US',
    },
    {
      title: 'EPS',
      value: 'EPS',
    },
    {
      title: 'CA',
      value: 'CA',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
