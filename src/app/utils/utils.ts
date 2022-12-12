// import { findFlagUrlByIso2Code } from 'country-flags-svg';
// export function countryFlag(isoCode: string) {
//   if (!isoCode?.length) {
//     return;
//   }
//   return findFlagUrlByIso2Code(isoCode);
// }

export function addClassToBody(className: string) {
  document.body.classList.add(className);
}

export function removeClassToBody(className: string) {
  document.body.classList.remove(className);
}
