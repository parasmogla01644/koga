import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.scss'],
})
export class ConfiguratorComponent implements OnInit {
  openModal: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleModal() {
    this.openModal = !this.openModal;
  }

  closeModal() {
    this.openModal = false;
  }
}
