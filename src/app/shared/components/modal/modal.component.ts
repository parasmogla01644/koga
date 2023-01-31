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

  constructor() {}

  ngOnChanges() {
    if (this.activeClass) {
      addClassToBody('is-modal');
    } else {
      removeClassToBody('is-modal');
    }
  }

  ngOnInit(): void {}

  closeModal() {
    this.close.emit();
  }
  
  onOutsideModalClick( event: any ){
    this.close.emit();
  }

  ngOnDestroy() {
    removeClassToBody('is-modal');
  }
}
