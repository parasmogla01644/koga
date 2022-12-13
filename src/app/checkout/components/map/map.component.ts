import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  clicked: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  submit() {
    this.clicked = true;
  }
}
