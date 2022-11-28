import { Component, OnInit } from '@angular/core';

export interface IHeaderTab {
  id: string;
  disabled: boolean;
  target: string;
  controls: string;
  selected: boolean;
  title: string;
}
@Component({
  selector: 'app-config-header',
  templateUrl: './config-header.component.html',
  styleUrls: ['./config-header.component.scss'],
})
export class ConfigHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  headerTab: IHeaderTab[] = [
    {
      id: 'home-tab',
      disabled: false,
      target: '#home',
      controls: 'home',
      selected: true,
      title: 'Frame',
    },
    {
      id: 'profile-tab',
      disabled: true,
      target: '#profile',
      controls: 'profile',
      selected: false,
      title: 'Remmen',
    },
    {
      id: 'contact-tab',
      disabled: true,
      target: '#contact',
      controls: 'contact',
      selected: false,
      title: 'Banden',
    },
    {
      id: 'contact-tab',
      disabled: true,
      target: '#contact',
      controls: 'contact',
      selected: false,
      title: 'Stuur',
    },
    {
      id: 'contact-tab',
      disabled: true,
      target: '#contact',
      controls: 'contact',
      selected: false,
      title: 'Zadel',
    },
    {
      id: 'contact-tab',
      disabled: true,
      target: '#contact',
      controls: 'contact',
      selected: false,
      title: 'Dragers',
    },
    {
      id: 'contact-tab',
      disabled: true,
      target: '#contact',
      controls: 'contact',
      selected: false,
      title: 'Verlichting',
    },
    {
      id: 'contact-tab',
      disabled: true,
      target: '#contact',
      controls: 'contact',
      selected: false,
      title: 'Accessoires',
    },
    {
      id: 'contact-tab',
      disabled: true,
      target: '#contact',
      controls: 'contact',
      selected: false,
      title: 'Maat',
    },
  ];

  dropDownStatus: boolean = false;
  languageToggle() {
    this.dropDownStatus = !this.dropDownStatus;
  }

  closeModal(event: any) {
    this.dropDownStatus = false;
  }
}
