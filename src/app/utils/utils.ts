import { findFlagUrlByIso2Code } from 'country-flags-svg';
export function countryFlag(isoCode: string) {
  if (!isoCode?.length) {
    return;
  }
  return findFlagUrlByIso2Code(isoCode);
}
