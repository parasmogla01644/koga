import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() isOpened: boolean = false;
  @Output() toggleMenu: EventEmitter<boolean> = new EventEmitter();
  dropDownStatus: boolean = false;
  isExpanded: boolean = false;
  expandedMenuName!: string;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
  }

  languageToggle(event: any) {
    this.dropDownStatus = !this.dropDownStatus;
    event.stopPropagation();
  }

  closeModal(event: any) {
    this.dropDownStatus = false;
    this.cd.detectChanges();
  }
  childMenuToggle( menuToggle: string){
    if( this.expandedMenuName === menuToggle ){
        this.isExpanded = !this.isExpanded;
    }
    this.expandedMenuName = menuToggle;
  }
}
