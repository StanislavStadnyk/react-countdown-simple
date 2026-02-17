import { useEffect, useMemo, useState } from 'react';
import { EDateTime, TFormatType } from './types';

const getDifference = (countdownDate: number): number =>
  Math.round((countdownDate - Date.now()) / 1000);

const toTimestamp = (value: string | number | Date): number => {
  if (value instanceof Date) {
    return value.getTime();
  }

  if (typeof value === 'number') {
    return value;
  }

  const parsed = new Date(value).getTime();

  // Fallback to "now" if the date is invalid to avoid NaN propagation
  return Number.isNaN(parsed) ? Date.now() : parsed;
};

export const getReturnValues = (countdown: number): number[] => {
  const safeCountdown = Math.max(countdown, 0);

  const SECONDS_IN_MINUTE = 60;
  const SECONDS_IN_HOUR = SECONDS_IN_MINUTE * 60;
  const SECONDS_IN_DAY = SECONDS_IN_HOUR * 24;

  const days = Math.floor(safeCountdown / SECONDS_IN_DAY);
  const hours = Math.floor((safeCountdown % SECONDS_IN_DAY) / SECONDS_IN_HOUR);
  const minutes = Math.floor((safeCountdown % SECONDS_IN_HOUR) / SECONDS_IN_MINUTE);
  const seconds = Math.floor(safeCountdown % SECONDS_IN_MINUTE);

  return [days, hours, minutes, seconds];
};

const TYPE_MAP: Record<EDateTime, string[]> = {
  [EDateTime.D_H_M_S]: ['D', 'H', 'M', 'S'],
  [EDateTime.d_h_m_s]: ['d', 'h', 'm', 's'],
  [EDateTime.DD_HH_MM_SS]: ['DD', 'HH', 'MM', 'SS'],
  [EDateTime.dd_hh_mm_ss]: ['dd', 'hh', 'mm', 'ss'],
};

export const getType = (formatType: TFormatType): string[] =>
  TYPE_MAP[(formatType as EDateTime) || EDateTime.D_H_M_S];

export const useCountdown = (date: string | number | Date): number[] => {
  const countdownDate = useMemo(() => toTimestamp(date), [date]);
  const [countdown, setCountDown] = useState(() => getDifference(countdownDate));

  useEffect(() => {
    const initialDiff = getDifference(countdownDate);

    if (initialDiff <= 0) {
      setCountDown(0);
      return;
    }

    const interval = setInterval(() => {
      setCountDown(() => {
        const next = getDifference(countdownDate);

        if (next <= 0) {
          clearInterval(interval);
          return 0;
        }

        return next;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [countdownDate]);

  return getReturnValues(countdown);
};
