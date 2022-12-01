import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-part',
  templateUrl: './card-part.component.html',
  styleUrls: ['./card-part.component.scss'],
})
export class CardPartComponent implements OnInit {
  @Input() infoTitle: string = '';
  @Input() caption: string = '';
  @Input() isDisabled: boolean = false;
  @Input() checked: boolean = false;

  @Output() selectedCard: EventEmitter<any> = new EventEmitter();

  constructor() {}
  ngOnInit(): void {}
}
