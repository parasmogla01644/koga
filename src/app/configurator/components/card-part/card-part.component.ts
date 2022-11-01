import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-card-part',
    templateUrl: './card-part.component.html',
    styleUrls: ['./card-part.component.scss']
})
export class CardPartComponent implements OnInit {

    constructor() { }
    @Input() caption: string = '';
    @Input() infoTitle: string = '';
    @Input() isDisabled: boolean = false;
    ngOnInit(): void {
    }

}
