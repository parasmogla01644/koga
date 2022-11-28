import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
})
export class LanguageSelectorComponent implements OnInit {
  @Output() close: EventEmitter<boolean> = new EventEmitter();
    @Input() activeClass: boolean =false;
  constructor() {}

  ngOnInit(): void {}

  closeModal() {
    this.close.emit(true);
  }

  status: boolean = false;
  clickToggle(){
      this.status = !this.status;       
  }
}
