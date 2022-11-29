import { IContinentsConfig } from '../models/languageSelector.models';

export const CONTINENTS_CONFIG: IContinentsConfig[] = [
  {
    id: 'europe',
    title: 'Europe',
    target: '#nav-Europe',
    selected: true,
    continent_code: 'EU',
  },
  {
    id: 'amerika',
    title: 'Amerika',
    target: '#nav-Amerika',
    selected: false,
    continent_code: 'NA',
  },
  {
    id: 'asia',
    title: 'Asia',
    target: '#nav-Asia',
    selected: false,
    continent_code: 'AS',
  },
  {
    id: 'afrika',
    title: 'Afrika',
    target: '#nav-Afrika',
    selected: false,
    continent_code: 'AF',
  },
  {
    id: 'ocenia',
    title: 'Ocenia',
    target: '#nav-Ocenia',
    selected: false,
    continent_code: 'OC',
  },
];
