import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { addClassToBody, removeClassToBody } from 'src/app/utils/utils';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, OnChanges, OnDestroy {
  @Output() close: EventEmitter<void> = new EventEmitter();
  @Input() headerTitle: string = '';
  @Input() headerCustomClass!: string[];
  @Input() activeClass: boolean = false;

  allowClickOutside: boolean = false;

  constructor() {}

  ngOnChanges() {
    if (this.activeClass) {
      addClassToBody('is-modal');
    } else {
      removeClassToBody('is-modal');
    }
  }

  ngOnInit(): void {
    console.log(window.innerWidth);
    this.allowClickOutside = window.innerWidth < 767 ? true: false;
  }

  closeModal() {
    this.close.emit();
  }
  
  onOutsideModalClick( ){
    this.close.emit();
  }

  ngOnDestroy() {
    removeClassToBody('is-modal');
  }
}
