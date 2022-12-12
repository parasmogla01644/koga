import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Output() close: EventEmitter<void> = new EventEmitter();
   @Input() headerTitle: string = ''; 
   @Input() headerCustomClass !: string[];
   @Input() activeClass: boolean = false; 

  constructor() {}

  ngOnInit(): void {}

  closeModal() {
    this.close.emit();
  }
}
