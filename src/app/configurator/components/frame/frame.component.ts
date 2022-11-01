import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
export interface IAppCards {
  isDisabled: boolean;
  caption: string;
  infoTitle: string;
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
    },
    {
      isDisabled: false,
      caption: 'Graphite black shiny',
      infoTitle: '',
    },
    {
      isDisabled: false,
      caption: 'Graphite black shiny',
      infoTitle: 'meest gekozen',
    },
    {
      isDisabled: true,
      caption: 'Graphite black shiny',
      infoTitle: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  handleChange(event: any) {
    console.log(event);
  }
}
