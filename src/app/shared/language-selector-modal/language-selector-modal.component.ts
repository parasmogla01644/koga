import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-language-selector-modal',
  templateUrl: './language-selector-modal.component.html',
  styleUrls: ['./language-selector-modal.component.scss'],
})
export class LanguageSelectorModalComponent implements OnInit {
  @Output() close: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  closeModal() {
    console.log('called');
    this.close.emit(true);
  }
}
