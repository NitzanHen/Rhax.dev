import { useEffect, useMemo, useState } from 'react';
import { entries, findKey, pipe, values } from 'rhax';

export enum ScreenSize {
  PHONE = 576,
  TABLET = 860,
  LAPTOP = 1366,
  DESKTOP = Infinity
}

const breakpointsArr = [ScreenSize.PHONE, ScreenSize.TABLET, ScreenSize.LAPTOP, ScreenSize.DESKTOP];

const currentScreenSize = () =>
  breakpointsArr.find(w => window.innerWidth <= w)!;

/** @todo if this is not used, remove it */

/** Returns the current ScreenSize, for responsive logic */
export const useScreenSize = (...observeSizesArgs: ScreenSize[]): ScreenSize => {
  const [screenSize, setScreenSize] = useState(ScreenSize.PHONE);

  const observeSizes = useMemo(() => observeSizesArgs.length > 0 ? observeSizesArgs : breakpointsArr, [observeSizesArgs]);

  useEffect(() => {
    const cb = () => setScreenSize(currentScreenSize);

    const mediaQueries = observeSizes.map(size => window.matchMedia(`(max-width: ${size}px)`));

    mediaQueries.forEach(mq => mq.addEventListener('change', cb));

    return () => mediaQueries.forEach(mq => mq.removeEventListener('change', cb));
  }, [observeSizes]);

  return screenSize;
};