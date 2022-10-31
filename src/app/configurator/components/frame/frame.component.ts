import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

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
  frames: {
    title: string;
    ref: any;
    expand: boolean;
  }[] = [
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

  constructor() {}

  ngOnInit(): void {}

  handleChange(event: any) {
    console.log(event);
  }
}
