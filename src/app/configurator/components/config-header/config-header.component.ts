import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config-header',
  templateUrl: './config-header.component.html',
  styleUrls: ['./config-header.component.scss']
})
export class ConfigHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  dropDownStatus: boolean = false;
  languageToggle(){
      this.dropDownStatus = !this.dropDownStatus;       
  }
}
