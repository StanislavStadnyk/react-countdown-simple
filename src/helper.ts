import { useEffect, useState } from "react";
import { EDateTime, TFormatType } from "./types";

const getDifference = (countdownDate: number): number =>
  Math.round((countdownDate - new Date().getTime()) / 1000);

export const getReturnValues = (countdown: number): number[] => {
  const days = Math.floor(countdown / (60 * 60 * 24));
  const hours = Math.floor((countdown % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((countdown % (60 * 60)) / 60);
  const seconds = Math.floor(countdown % 60);

  return [days, hours, minutes, seconds];
};

export const getType = (formatType: TFormatType): string[] =>
  formatType ? EDateTime[formatType].split("_") : EDateTime.D_H_M_S.split("_");

export const useCountdown = (date: string): number[] => {
  const countdownDate = new Date(date).getTime();
  const [countdown, setCountDown] = useState(getDifference(countdownDate));

  useEffect(() => {
    if (getDifference(countdownDate) <= 0) {
      setCountDown(0);
      return () => {};
    }

    const interval = setInterval(() => {
      setCountDown(getDifference(countdownDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [countdown, countdownDate]);

  return getReturnValues(countdown);
};
