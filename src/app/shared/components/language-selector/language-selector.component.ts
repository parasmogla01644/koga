import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {
  countries,
  COUNTRIES_AS_PER_CONTINETS,
} from '@shared/constants/countries.contants';
import { addClassToBody, removeClassToBody } from 'src/app/utils/utils';
import { CONTINENTS_CONFIG } from '../../constants/languageSelector.constants';
import { IContinentsConfig } from '../../models/languageSelector.models';
@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
})
export class LanguageSelectorComponent implements OnInit, OnChanges, OnDestroy {
  languages: string[] = ['English', 'Deutsch', 'German', 'French'];
  countryList: any[] = [];
  countriesAsPerContinents: any = COUNTRIES_AS_PER_CONTINETS;
  continentsConfig: IContinentsConfig[] = CONTINENTS_CONFIG;
  selectedContinent: IContinentsConfig = CONTINENTS_CONFIG[0];
  selectedCountry: any;
  selectedLanguage: string = 'English';
  @Output() close: EventEmitter<boolean> = new EventEmitter();
  @Input() activeClass: boolean = false;
  allowClickOutside: boolean = false;
  constructor() {}

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.allowClickOutside = window.innerWidth < 767 ? true: false;
  }
  
  ngOnChanges() {
    if (this.activeClass) {
      addClassToBody('is-modal');
    } else {
      removeClassToBody('is-modal');
    }
  }

  ngOnInit(): void {
    this.setCountryList();
    this.allowClickOutside = window.innerWidth < 767 ? true: false;
  }

  closeModal() {
    this.close.emit(true);
  }

  saveLanguage() {
    this.closeModal();
  }

  setCountryList() {
    this.countryList =
      COUNTRIES_AS_PER_CONTINETS?.[this.selectedContinent?.continent_code];
  }

  selectContinent(index: number) {
    this.continentsConfig.forEach((item, i) => {
      if (index === i) {
        this.selectedContinent = item;
        item.selected = true;
      } else {
        item.selected = false;
      }
    });
    this.setCountryList();
  }

  selectCountry(item: any) {
    this.selectedCountry = item;
  }

  selectLanguages(lang: string) {
    this.selectedLanguage = lang;
  }

  ngOnDestroy() {
    removeClassToBody('is-modal');
  }
}
