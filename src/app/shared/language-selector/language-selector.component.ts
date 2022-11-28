import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
})
export class LanguageSelectorComponent implements OnInit {
  @Output() close: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  closeModal() {
    console.log('called');
    this.close.emit(true);
  }
}
